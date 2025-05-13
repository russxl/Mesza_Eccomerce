"use client"

import { useState } from "react"
import { Search, Filter, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useQuery } from "@tanstack/react-query"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { getOrderStatusBadge } from "./utils"
import { useOrderStore } from "@/store/orderStore"

export default function OrdersPage() {
  const router = useRouter()
  const { getAllOrders } = useOrderStore()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // Use React Query to fetch orders
  const { data: orders = [], isLoading, error } = useQuery({
    queryKey: ['orders'],
    queryFn: getAllOrders,
  })

  // Filter orders based on search term and selected statuses
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (order.shipping?.email?.toLowerCase().includes(searchTerm.toLowerCase()) || false) ||
      (order.shipping?.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) || false) ||
      (order.shipping?.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) || false)

    const matchesStatus = selectedStatuses.length === 0 || (order.status && selectedStatuses.includes(order.status))

    return matchesSearch && matchesStatus
  })

  // Calculate pagination
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage)
  const paginatedOrders = filteredOrders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Handle status filter changes
  const handleStatusToggle = (status: string) => {
    if (selectedStatuses.includes(status)) {
      setSelectedStatuses(selectedStatuses.filter((s) => s !== status))
    } else {
      setSelectedStatuses([...selectedStatuses, status])
    }
    setCurrentPage(1) // Reset to first page when filters change
  }

  // Order statuses
  const orderStatuses = ["pending", "processing", "paid", "shipped", "readyforpickup", "delivered", "cancelled"]

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="ml-4 text-lg">Loading orders...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-6 md:p-8 text-center">
        <h1 className="text-xl font-semibold text-destructive">Error loading orders</h1>
        <p className="mt-2 text-muted-foreground">Please try refreshing the page.</p>
      </div>
    )
  }

  return (
    <div className="p-6 md:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold">Orders</h1>
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-initial max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search orders..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1)
              }}
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {orderStatuses.map((status) => (
                <DropdownMenuCheckboxItem
                  key={status}
                  checked={selectedStatuses.includes(status)}
                  onCheckedChange={() => handleStatusToggle(status)}
                >
                  <div className="flex items-center gap-2">
                    {getOrderStatusBadge(status)}
                    <span className="capitalize">{status}</span>
                  </div>
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {paginatedOrders.length > 0 ? (
        <>
          <div className="rounded-md border bg-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedOrders.map((order) => (
                  <TableRow key={order._id}>
                    <TableCell className="font-medium">{order.orderId}</TableCell>
                    <TableCell>{new Date(order.createdAt || 0).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div>
                        {order.shipping ? (
                          <>
                            <p className="font-medium">{order.shipping.firstName} {order.shipping.lastName}</p>
                            <p className="text-sm text-muted-foreground">{order.shipping.email}</p>
                          </>
                        ) : (
                          <p className="text-sm text-muted-foreground">No shipping info</p>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{getOrderStatusBadge(order.status || "unknown")}</TableCell>
                    <TableCell>${order.subTotal.toFixed(2)}</TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" onClick={() => router.push(`/dashboard/orders/${order.orderId}`)}>
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    if (currentPage > 1) setCurrentPage(currentPage - 1)
                  }}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1
                // Show first page, current page, last page, and pages around current
                if (
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                ) {
                  return (
                    <PaginationItem key={pageNumber}>
                      <PaginationLink
                        href="#"
                        isActive={pageNumber === currentPage}
                        onClick={(e) => {
                          e.preventDefault()
                          setCurrentPage(pageNumber)
                        }}
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  )
                } else if (
                  (pageNumber === currentPage - 2 && currentPage > 3) ||
                  (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
                ) {
                  return (
                    <PaginationItem key={pageNumber}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )
                }
                return null
              })}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
                  }}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </>
      ) : (
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <div className="rounded-full bg-muted p-3 mb-3">
              <Search className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-1">No orders found</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm || selectedStatuses.length > 0
                ? "No orders match your search criteria. Try adjusting your filters."
                : "There are no orders to display yet."}
            </p>
            {(searchTerm || selectedStatuses.length > 0) && (
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedStatuses([])
                }}
              >
                Clear Filters
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
