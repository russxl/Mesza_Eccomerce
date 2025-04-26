// pages/login.js (Next.js example)
"use client";
import { useSignIn } from "@clerk/nextjs";
import { AlertCircle } from "lucide-react";
import { useState } from "react";

export default function AdminLogin() {
  const { signIn, isLoaded } = useSignIn();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    if (!isLoaded) return;

    setLoading(true);
    setError("");

    try {
      // Initiate Google OAuth flow
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/not-found",
        redirectUrlComplete: "/dashboard",
        // After successful sign in, the user data will be automatically
        // processed by the webhook and stored in Convex
      });
    } catch (err) {
      setError("Failed to sign in with Google. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Mesza</h1>
          <p className="text-gray-400">Admin Portal</p>
        </div>

        {/* Login Card */}
        <div className="bg-gray-800 rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Admin Login
            </h2>
            <p className="text-gray-400">Access the administrative dashboard</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-900/30 border border-red-900/50 rounded-lg flex items-center text-red-200">
              <AlertCircle className="h-4 w-4 mr-2" />
              <span>{error}</span>
            </div>
          )}

          {/* Google Sign-in Button */}
          <button
            onClick={handleGoogleLogin}
            disabled={loading || !isLoaded}
            className="w-full flex items-center justify-center bg-white text-gray-800 py-3 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-gray-800 border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-5 h-5 mr-3"
                />
                Continue with Google
              </>
            )}
          </button>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Authorized administrators only. This login is restricted to Mesza
              staff.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Mesza. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
