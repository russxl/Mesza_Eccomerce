module.exports = {

"[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/utils/mergeNextClerkPropsWithEnv.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "mergeNextClerkPropsWithEnv": (()=>mergeNextClerkPropsWithEnv)
});
const mergeNextClerkPropsWithEnv = (props)=>{
    return {
        ...props,
        frontendApi: props.frontendApi || process.env.NEXT_PUBLIC_CLERK_FRONTEND_API || "",
        publishableKey: props.publishableKey || ("TURBOPACK compile-time value", "pk_test_cmVsYXhlZC1nb3JpbGxhLTU1LmNsZXJrLmFjY291bnRzLmRldiQ") || "",
        clerkJSUrl: props.clerkJSUrl || process.env.NEXT_PUBLIC_CLERK_JS,
        clerkJSVersion: props.clerkJSVersion || process.env.NEXT_PUBLIC_CLERK_JS_VERSION,
        proxyUrl: props.proxyUrl || process.env.NEXT_PUBLIC_CLERK_PROXY_URL || "",
        domain: props.domain || process.env.NEXT_PUBLIC_CLERK_DOMAIN || "",
        isSatellite: props.isSatellite || process.env.NEXT_PUBLIC_CLERK_IS_SATELLITE === "true",
        signInUrl: props.signInUrl || process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL || "",
        signUpUrl: props.signUpUrl || process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL || "",
        afterSignInUrl: props.afterSignInUrl || process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL || "",
        afterSignUpUrl: props.afterSignUpUrl || process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL || "",
        sdkMetadata: {
            name: "@clerk/nextjs",
            version: "4.30.0"
        }
    };
};
;
 //# sourceMappingURL=mergeNextClerkPropsWithEnv.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/app-router/client/ClerkProvider.js (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClientClerkProvider": (()=>ClientClerkProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const ClientClerkProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ClientClerkProvider() from the server but ClientClerkProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/app-router/client/ClerkProvider.js <module evaluation>", "ClientClerkProvider");
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/app-router/client/ClerkProvider.js (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClientClerkProvider": (()=>ClientClerkProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const ClientClerkProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ClientClerkProvider() from the server but ClientClerkProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/app-router/client/ClerkProvider.js", "ClientClerkProvider");
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/app-router/client/ClerkProvider.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$client$2f$ClerkProvider$2e$js__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/app-router/client/ClerkProvider.js (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$client$2f$ClerkProvider$2e$js__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/app-router/client/ClerkProvider.js (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$client$2f$ClerkProvider$2e$js__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/constants.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "API_KEY": (()=>API_KEY),
    "API_URL": (()=>API_URL),
    "API_VERSION": (()=>API_VERSION),
    "CLERK_JS_URL": (()=>CLERK_JS_URL),
    "CLERK_JS_VERSION": (()=>CLERK_JS_VERSION),
    "DOMAIN": (()=>DOMAIN),
    "FRONTEND_API": (()=>FRONTEND_API),
    "IS_SATELLITE": (()=>IS_SATELLITE),
    "JS_VERSION": (()=>JS_VERSION),
    "PROXY_URL": (()=>PROXY_URL),
    "PUBLISHABLE_KEY": (()=>PUBLISHABLE_KEY),
    "SECRET_KEY": (()=>SECRET_KEY),
    "SIGN_IN_URL": (()=>SIGN_IN_URL),
    "SIGN_UP_URL": (()=>SIGN_UP_URL)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$1$2e$4$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$deprecated$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@1.4.1_react@19.1.0/node_modules/@clerk/shared/dist/deprecated.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$1$2e$4$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IC4FGZI3$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@1.4.1_react@19.1.0/node_modules/@clerk/shared/dist/chunk-IC4FGZI3.mjs [app-rsc] (ecmascript)");
;
const JS_VERSION = process.env.CLERK_JS_VERSION || "";
if (JS_VERSION) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$1$2e$4$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IC4FGZI3$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deprecated"])("CLERK_JS_VERSION", "Use `NEXT_PUBLIC_CLERK_JS_VERSION` environment variable instead.");
}
const CLERK_JS_VERSION = process.env.NEXT_PUBLIC_CLERK_JS_VERSION || "";
const CLERK_JS_URL = process.env.NEXT_PUBLIC_CLERK_JS || "";
const API_URL = process.env.CLERK_API_URL || "https://api.clerk.dev";
const API_VERSION = process.env.CLERK_API_VERSION || "v1";
const API_KEY = process.env.CLERK_API_KEY || "";
if (API_KEY) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$1$2e$4$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IC4FGZI3$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deprecated"])("CLERK_API_KEY", "Use `CLERK_SECRET_KEY` environment variable instead.");
}
const SECRET_KEY = process.env.CLERK_SECRET_KEY || "";
const FRONTEND_API = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API || "";
if (FRONTEND_API) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$1$2e$4$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IC4FGZI3$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deprecated"])("NEXT_PUBLIC_CLERK_FRONTEND_API", "Use `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` environment variable instead.");
}
const PUBLISHABLE_KEY = ("TURBOPACK compile-time value", "pk_test_cmVsYXhlZC1nb3JpbGxhLTU1LmNsZXJrLmFjY291bnRzLmRldiQ") || "";
const DOMAIN = process.env.NEXT_PUBLIC_CLERK_DOMAIN || "";
const PROXY_URL = process.env.NEXT_PUBLIC_CLERK_PROXY_URL || "";
const IS_SATELLITE = process.env.NEXT_PUBLIC_CLERK_IS_SATELLITE === "true" || false;
const SIGN_IN_URL = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL || "";
const SIGN_UP_URL = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL || "";
;
 //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/constants.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "constants": (()=>constants)
});
const Headers = {
    NextRewrite: "x-middleware-rewrite",
    NextResume: "x-middleware-next",
    NextRedirect: "Location"
};
const constants = {
    Headers
};
;
 //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/errors.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "authAuthHeaderMissing": (()=>authAuthHeaderMissing),
    "clockSkewDetected": (()=>clockSkewDetected),
    "getAuthAuthHeaderMissing": (()=>getAuthAuthHeaderMissing),
    "infiniteRedirectLoopDetected": (()=>infiniteRedirectLoopDetected),
    "informAboutProtectedRouteInfo": (()=>informAboutProtectedRouteInfo),
    "missingDomainAndProxy": (()=>missingDomainAndProxy),
    "missingSignInUrlInDev": (()=>missingSignInUrlInDev),
    "receivedRequestForIgnoredRoute": (()=>receivedRequestForIgnoredRoute)
});
const missingDomainAndProxy = `
Missing domain and proxyUrl. A satellite application needs to specify a domain or a proxyUrl.

1) With middleware
   e.g. export default withClerkMiddleware(req => {...}, {domain:'YOUR_DOMAIN',isSatellite:true});
2) With environment variables e.g.
   NEXT_PUBLIC_CLERK_DOMAIN='YOUR_DOMAIN'
   NEXT_PUBLIC_CLERK_IS_SATELLITE='true'
   `;
const missingSignInUrlInDev = `
Invalid signInUrl. A satellite application requires a signInUrl for development instances.
Check if signInUrl is missing from your configuration or if it is not an absolute URL

1) With middleware
   e.g. export default withClerkMiddleware(req => {...}, {signInUrl:'SOME_URL',isSatellite:true});
2) With environment variables e.g.
   NEXT_PUBLIC_CLERK_SIGN_IN_URL='SOME_URL'
   NEXT_PUBLIC_CLERK_IS_SATELLITE='true'`;
const receivedRequestForIgnoredRoute = (url, matcher)=>`Clerk: The middleware was skipped for this request URL: ${url}. For performance reasons, it's recommended to your middleware matcher to:
export const config = {
  matcher: ${matcher},
};

Alternatively, you can set your own ignoredRoutes. See https://clerk.com/docs/nextjs/middleware
(This log only appears in development mode)
`;
const getAuthAuthHeaderMissing = ()=>authAuthHeaderMissing("getAuth");
const authAuthHeaderMissing = (helperName = "auth")=>`Clerk: ${helperName}() was called but Clerk can't detect usage of authMiddleware(). Please ensure the following:
- authMiddleware() is used in your Next.js Middleware.
- Your Middleware matcher is configured to match this route or page.
- If you are using the src directory, make sure the Middleware file is inside of it.

For more details, see https://clerk.com/docs/quickstarts/nextjs
`;
const clockSkewDetected = (verifyMessage)=>`Clerk: Clock skew detected. This usually means that your system clock is inaccurate. Clerk will continuously try to issue new tokens, as the existing ones will be treated as "expired" due to clock skew.

To resolve this issue, make sure your system's clock is set to the correct time (e.g. turn off and on automatic time synchronization).

---

${verifyMessage}`;
const infiniteRedirectLoopDetected = ()=>`Clerk: Infinite redirect loop detected. That usually means that we were not able to determine the auth state for this request. A list of common causes and solutions follows.

Reason 1:
Your Clerk instance keys are incorrect, or you recently changed keys (Publishable Key, Secret Key).
How to resolve:
-> Make sure you're using the correct keys from the Clerk Dashboard. If you changed keys recently, make sure to clear your browser application data and cookies.

Reason 2:
A bug that may have already been fixed in the latest version of Clerk NextJS package.
How to resolve:
-> Make sure you are using the latest version of '@clerk/nextjs' and 'next'.
`;
const informAboutProtectedRouteInfo = (path, hasPublicRoutes, hasIgnoredRoutes, isApiRoute, defaultIgnoredRoutes)=>{
    const infoText = isApiRoute ? `INFO: Clerk: The request to ${path} is being protected (401) because there is no signed-in user, and the path is included in \`apiRoutes\`. To prevent this behavior, choose one of:` : `INFO: Clerk: The request to ${path} is being redirected because there is no signed-in user, and the path is not included in \`ignoredRoutes\` or \`publicRoutes\`. To prevent this behavior, choose one of:`;
    const apiRoutesText = isApiRoute ? `To prevent Clerk authentication from protecting (401) the api route, remove the rule matching "${path}" from the \`apiRoutes\` array passed to authMiddleware` : void 0;
    const publicRoutesText = hasPublicRoutes ? `To make the route accessible to both signed in and signed out users, add "${path}" to the \`publicRoutes\` array passed to authMiddleware` : `To make the route accessible to both signed in and signed out users, pass \`publicRoutes: ["${path}"]\` to authMiddleware`;
    const ignoredRoutes = [
        ...defaultIgnoredRoutes,
        path
    ].map((r)=>`"${r}"`).join(", ");
    const ignoredRoutesText = hasIgnoredRoutes ? `To prevent Clerk authentication from running at all, add "${path}" to the \`ignoredRoutes\` array passed to authMiddleware` : `To prevent Clerk authentication from running at all, pass \`ignoredRoutes: [${ignoredRoutes}]\` to authMiddleware`;
    const afterAuthText = "Pass a custom `afterAuth` to authMiddleware, and replace Clerk's default behavior of redirecting unless a route is included in publicRoutes";
    return `${infoText}

${[
        apiRoutesText,
        publicRoutesText,
        ignoredRoutesText,
        afterAuthText
    ].filter(Boolean).map((text, index)=>`${index + 1}. ${text}`).join("\n")}

For additional information about middleware, please visit https://clerk.com/docs/nextjs/middleware
(This log only appears in development mode, or if \`debug: true\` is passed to authMiddleware)`;
};
;
 //# sourceMappingURL=errors.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/utils.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "apiEndpointUnauthorizedNextResponse": (()=>apiEndpointUnauthorizedNextResponse),
    "decorateRequest": (()=>decorateRequest),
    "getAuthKeyFromRequest": (()=>getAuthKeyFromRequest),
    "getAuthStatusFromRequest": (()=>getAuthStatusFromRequest),
    "getCookie": (()=>getCookie),
    "getCustomAttributeFromRequest": (()=>getCustomAttributeFromRequest),
    "getHeader": (()=>getHeader),
    "handleMultiDomainAndProxy": (()=>handleMultiDomainAndProxy),
    "injectSSRStateIntoObject": (()=>injectSSRStateIntoObject),
    "isCrossOrigin": (()=>isCrossOrigin),
    "isDevelopmentFromApiKey": (()=>isDevelopmentFromApiKey),
    "nextJsVersionCanOverrideRequestHeaders": (()=>nextJsVersionCanOverrideRequestHeaders),
    "setCustomAttributeOnRequest": (()=>setCustomAttributeOnRequest),
    "setRequestHeadersOnNextResponse": (()=>setRequestHeadersOnNextResponse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@0.38.7_react@19.1.0/node_modules/@clerk/backend/dist/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$1$2e$4$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$handleValueOrFn$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@1.4.1_react@19.1.0/node_modules/@clerk/shared/dist/handleValueOrFn.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$1$2e$4$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TRWMHODU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@1.4.1_react@19.1.0/node_modules/@clerk/shared/dist/chunk-TRWMHODU.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$1$2e$4$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@1.4.1_react@19.1.0/node_modules/@clerk/shared/dist/proxy.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$1$2e$4$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$MHVPBPEZ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@1.4.1_react@19.1.0/node_modules/@clerk/shared/dist/chunk-MHVPBPEZ.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/errors.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
function setCustomAttributeOnRequest(req, key, value) {
    Object.assign(req, {
        [key]: value
    });
}
function getCustomAttributeFromRequest(req, key) {
    return key in req ? req[key] : void 0;
}
function getAuthKeyFromRequest(req, key) {
    const val = getCustomAttributeFromRequest(req, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Attributes[key]) || getHeader(req, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers[key]);
    if (val) {
        return val;
    }
    if (key === "AuthStatus" || key === "AuthToken") {
        return getQueryParam(req, key) || void 0;
    }
    return void 0;
}
function getAuthStatusFromRequest(req) {
    return getCustomAttributeFromRequest(req, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Attributes.AuthStatus) || getHeader(req, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.AuthStatus) || getQueryParam(req, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].SearchParams.AuthStatus);
}
function getQueryParam(req, name) {
    if (isNextRequest(req)) {
        return req.nextUrl.searchParams.get(name);
    }
    let queryParam;
    if ("query" in req) {
        queryParam = req.query[name];
    }
    if (!queryParam) {
        const qs = (req.url || "").split("?")[1];
        queryParam = new URLSearchParams(qs).get(name);
    }
    return queryParam;
}
function getHeader(req, name) {
    var _a, _b;
    if (isNextRequest(req)) {
        return req.headers.get(name);
    }
    return req.headers[name] || req.headers[name.toLowerCase()] || ((_b = (_a = req.socket) == null ? void 0 : _a._httpMessage) == null ? void 0 : _b.getHeader(name));
}
function getCookie(req, name) {
    if (isNextRequest(req)) {
        const reqCookieOrString = req.cookies.get(name);
        if (!reqCookieOrString) {
            return void 0;
        }
        return typeof reqCookieOrString === "string" ? reqCookieOrString : reqCookieOrString.value;
    }
    return req.cookies[name];
}
function isNextRequest(val) {
    try {
        const { headers, nextUrl, cookies } = val || {};
        return typeof (headers == null ? void 0 : headers.get) === "function" && typeof (nextUrl == null ? void 0 : nextUrl.searchParams.get) === "function" && typeof (cookies == null ? void 0 : cookies.get) === "function";
    } catch (e) {
        return false;
    }
}
const OVERRIDE_HEADERS = "x-middleware-override-headers";
const MIDDLEWARE_HEADER_PREFIX = "x-middleware-request";
const setRequestHeadersOnNextResponse = (res, req, newHeaders)=>{
    if (!res.headers.get(OVERRIDE_HEADERS)) {
        res.headers.set(OVERRIDE_HEADERS, [
            ...req.headers.keys()
        ]);
        req.headers.forEach((val, key)=>{
            res.headers.set(`${MIDDLEWARE_HEADER_PREFIX}-${key}`, val);
        });
    }
    Object.entries(newHeaders).forEach(([key, val])=>{
        res.headers.set(OVERRIDE_HEADERS, `${res.headers.get(OVERRIDE_HEADERS)},${key}`);
        res.headers.set(`${MIDDLEWARE_HEADER_PREFIX}-${key}`, val);
    });
};
const nextJsVersionCanOverrideRequestHeaders = ()=>{
    try {
        const headerKey = "clerkTest";
        const headerKeyInRes = `${MIDDLEWARE_HEADER_PREFIX}-${headerKey}`;
        const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].next({
            request: {
                headers: new Headers({
                    [headerKey]: "true"
                })
            }
        });
        return res.headers.has(headerKeyInRes);
    } catch (e) {
        return false;
    }
};
const injectSSRStateIntoObject = (obj, authObject)=>{
    const __clerk_ssr_state = ("TURBOPACK compile-time truthy", 1) ? JSON.parse(JSON.stringify({
        ...authObject
    })) : ("TURBOPACK unreachable", undefined);
    return {
        ...obj,
        __clerk_ssr_state
    };
};
function isDevelopmentFromApiKey(apiKey) {
    return apiKey.startsWith("test_") || apiKey.startsWith("sk_test_");
}
function decorateRequest(req, res, requestState) {
    const { reason, message, status, token } = requestState;
    if (!res) {
        res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    if (res.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.NextRedirect)) {
        return res;
    }
    let rewriteURL;
    if (res.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.NextResume) === "1") {
        res.headers.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.NextResume);
        rewriteURL = new URL(req.url);
    }
    const rewriteURLHeader = res.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.NextRewrite);
    if (rewriteURLHeader) {
        const reqURL = new URL(req.url);
        rewriteURL = new URL(rewriteURLHeader);
        if (rewriteURL.origin !== reqURL.origin) {
            return res;
        }
    }
    if (rewriteURL) {
        if (nextJsVersionCanOverrideRequestHeaders()) {
            setRequestHeadersOnNextResponse(res, req, {
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.AuthStatus]: status,
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.AuthToken]: token || "",
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.AuthMessage]: message || "",
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.AuthReason]: reason || ""
            });
        } else {
            res.headers.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.AuthStatus, status);
            res.headers.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.AuthToken, token || "");
            res.headers.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.AuthMessage, message || "");
            res.headers.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.AuthReason, reason || "");
            rewriteURL.searchParams.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].SearchParams.AuthStatus, status);
            rewriteURL.searchParams.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].SearchParams.AuthToken, token || "");
            rewriteURL.searchParams.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.AuthMessage, message || "");
            rewriteURL.searchParams.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.AuthReason, reason || "");
        }
        res.headers.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.NextRewrite, rewriteURL.href);
    }
    return res;
}
const apiEndpointUnauthorizedNextResponse = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json(null, {
        status: 401,
        statusText: "Unauthorized"
    });
};
const isCrossOrigin = (from, to)=>{
    const fromUrl = new URL(from);
    const toUrl = new URL(to);
    return fromUrl.origin !== toUrl.origin;
};
const handleMultiDomainAndProxy = (req, opts)=>{
    const requestURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildRequestUrl"])(req);
    const relativeOrAbsoluteProxyUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$1$2e$4$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TRWMHODU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleValueOrFn"])(opts == null ? void 0 : opts.proxyUrl, requestURL, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PROXY_URL"]);
    let proxyUrl;
    if (!!relativeOrAbsoluteProxyUrl && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$1$2e$4$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$MHVPBPEZ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHttpOrHttps"])(relativeOrAbsoluteProxyUrl)) {
        proxyUrl = new URL(relativeOrAbsoluteProxyUrl, requestURL).toString();
    } else {
        proxyUrl = relativeOrAbsoluteProxyUrl;
    }
    const isSatellite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$1$2e$4$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TRWMHODU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleValueOrFn"])(opts.isSatellite, new URL(req.url), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IS_SATELLITE"]);
    const domain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$1$2e$4$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TRWMHODU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleValueOrFn"])(opts.domain, new URL(req.url), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOMAIN"]);
    const signInUrl = (opts == null ? void 0 : opts.signInUrl) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SIGN_IN_URL"];
    if (isSatellite && !proxyUrl && !domain) {
        throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["missingDomainAndProxy"]);
    }
    if (isSatellite && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$1$2e$4$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$MHVPBPEZ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHttpOrHttps"])(signInUrl) && isDevelopmentFromApiKey(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SECRET_KEY"] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_KEY"])) {
        throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["missingSignInUrlInDev"]);
    }
    return {
        proxyUrl,
        isSatellite,
        domain,
        signInUrl
    };
};
;
 //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/buildClerkProps.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "buildClerkProps": (()=>buildClerkProps)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@0.38.7_react@19.1.0/node_modules/@clerk/backend/dist/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/utils.js [app-rsc] (ecmascript)");
;
;
;
const buildClerkProps = (req, initState = {})=>{
    const authToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthKeyFromRequest"])(req, "AuthToken");
    const authStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthKeyFromRequest"])(req, "AuthStatus");
    const authMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthKeyFromRequest"])(req, "AuthMessage");
    const authReason = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthKeyFromRequest"])(req, "AuthReason");
    const options = {
        apiKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_KEY"],
        secretKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SECRET_KEY"],
        apiUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_URL"],
        apiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_VERSION"],
        authStatus,
        authMessage,
        authReason
    };
    let authObject;
    if (!authStatus || authStatus !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AuthStatus"].SignedIn) {
        authObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signedOutAuthObject"])(options);
    } else {
        const { payload, raw } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeJwt"])(authToken);
        authObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signedInAuthObject"])(payload, {
            ...options,
            token: raw.text
        });
    }
    const sanitizedAuthObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeAuthObjectSerializable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeAuthObject"])({
        ...authObject,
        ...initState
    }));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["injectSSRStateIntoObject"])({}, sanitizedAuthObject);
};
;
 //# sourceMappingURL=buildClerkProps.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/utils/logFormatter.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "logFormatter": (()=>logFormatter)
});
const maskSecretKey = (str)=>{
    if (!str || typeof str !== "string") {
        return str;
    }
    try {
        return (str || "").replace(/^(sk_(live|test)_)(.+?)(.{3})$/, "$1*********$4");
    } catch (e) {
        return "";
    }
};
const logFormatter = (entry)=>{
    return (Array.isArray(entry) ? entry : [
        entry
    ]).map((entry2)=>{
        if (typeof entry2 === "string") {
            return maskSecretKey(entry2);
        }
        const masked = Object.fromEntries(Object.entries(entry2).map(([k, v])=>[
                k,
                maskSecretKey(v)
            ]));
        return JSON.stringify(masked, null, 2);
    }).join(", ");
};
;
 //# sourceMappingURL=logFormatter.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/utils/debugLogger.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createDebugLogger": (()=>createDebugLogger),
    "withLogger": (()=>withLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$package$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/package.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$logFormatter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/utils/logFormatter.js [app-rsc] (ecmascript)");
;
;
const createDebugLogger = (name, formatter)=>()=>{
        const entries = [];
        let isEnabled = false;
        return {
            enable: ()=>{
                isEnabled = true;
            },
            debug: (...args)=>{
                if (isEnabled) {
                    entries.push(args.map((arg)=>typeof arg === "function" ? arg() : arg));
                }
            },
            commit: ()=>{
                if (isEnabled) {
                    console.log(debugLogHeader(name));
                    for (const log of entries){
                        let output = formatter(log);
                        output = output.split("\n").map((l)=>`  ${l}`).join("\n");
                        if (process.env.VERCEL) {
                            output = truncate(output, 4096);
                        }
                        console.log(output);
                    }
                    console.log(debugLogFooter(name));
                }
            }
        };
    };
const withLogger = (loggerFactoryOrName, handlerCtor)=>{
    return (...args)=>{
        const factory = typeof loggerFactoryOrName === "string" ? createDebugLogger(loggerFactoryOrName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$logFormatter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logFormatter"]) : loggerFactoryOrName;
        const logger = factory();
        const handler = handlerCtor(logger);
        try {
            const res = handler(...args);
            if (typeof res === "object" && "then" in res && typeof res.then === "function") {
                return res.then((val)=>{
                    logger.commit();
                    return val;
                }).catch((err)=>{
                    logger.commit();
                    throw err;
                });
            }
            logger.commit();
            return res;
        } catch (err) {
            logger.commit();
            throw err;
        }
    };
};
function debugLogHeader(name) {
    return `[clerk debug start: ${name}]`;
}
function debugLogFooter(name) {
    return `[clerk debug end: ${name}] (@clerk/nextjs=${"4.30.0"},next=${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$package$2e$json__$28$json$29$__["default"].version})`;
}
function truncate(str, maxLength) {
    const encoder = new TextEncoder();
    const decoder = new TextDecoder("utf-8");
    const encodedString = encoder.encode(str);
    const truncatedString = encodedString.slice(0, maxLength);
    return decoder.decode(truncatedString).replace(/\uFFFD/g, "");
}
;
 //# sourceMappingURL=debugLogger.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/createGetAuth.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createGetAuth": (()=>createGetAuth),
    "getAuth": (()=>getAuth),
    "parseJwt": (()=>parseJwt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@0.38.7_react@19.1.0/node_modules/@clerk/backend/dist/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$1$2e$4$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$deprecated$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@1.4.1_react@19.1.0/node_modules/@clerk/shared/dist/deprecated.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$1$2e$4$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IC4FGZI3$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@1.4.1_react@19.1.0/node_modules/@clerk/shared/dist/chunk-IC4FGZI3.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$debugLogger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/utils/debugLogger.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/utils.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const createGetAuth = ({ debugLoggerName, noAuthStatusMessage })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$debugLogger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withLogger"])(debugLoggerName, (logger)=>{
        return (req, opts)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHeader"])(req, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.EnableDebug) === "true") {
                logger.enable();
            }
            const authToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthKeyFromRequest"])(req, "AuthToken");
            const authStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthKeyFromRequest"])(req, "AuthStatus");
            const authMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthKeyFromRequest"])(req, "AuthMessage");
            const authReason = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthKeyFromRequest"])(req, "AuthReason");
            logger.debug("Debug", {
                authReason,
                authMessage,
                authStatus,
                authToken
            });
            if (!authStatus) {
                throw new Error(noAuthStatusMessage);
            }
            const options = {
                apiKey: (opts == null ? void 0 : opts.apiKey) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_KEY"],
                authStatus,
                authMessage,
                secretKey: (opts == null ? void 0 : opts.secretKey) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SECRET_KEY"],
                authReason,
                authToken,
                apiUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_URL"],
                apiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_VERSION"]
            };
            logger.debug("Options debug", options);
            if (authStatus !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AuthStatus"].SignedIn) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signedOutAuthObject"])(options);
            }
            const jwt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeJwt"])(authToken);
            logger.debug("JWT debug", jwt.raw.text);
            const signedIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signedInAuthObject"])(jwt.payload, {
                ...options,
                token: jwt.raw.text
            });
            if (signedIn) {
                if (signedIn.user) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$1$2e$4$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IC4FGZI3$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deprecatedObjectProperty"])(signedIn, "user", "Use `clerkClient.users.getUser` instead.");
                }
                if (signedIn.organization) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$1$2e$4$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IC4FGZI3$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deprecatedObjectProperty"])(signedIn, "organization", "Use `clerkClient.organizations.getOrganization` instead.");
                }
                if (signedIn.session) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$1$2e$4$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IC4FGZI3$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deprecatedObjectProperty"])(signedIn, "session", "Use `clerkClient.sessions.getSession` instead.");
                }
            }
            return signedIn;
        };
    });
const parseJwt = (req)=>{
    var _a;
    const cookieToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCookie"])(req, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Cookies.Session);
    const headerToken = (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHeader"])(req, "authorization")) == null ? void 0 : _a.replace("Bearer ", "");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeJwt"])(cookieToken || headerToken || "");
};
const getAuth = createGetAuth({
    debugLoggerName: "getAuth()",
    noAuthStatusMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthAuthHeaderMissing"])()
});
;
 //# sourceMappingURL=createGetAuth.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/app-router/server/utils.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "buildRequestLike": (()=>buildRequestLike)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/server.js [app-rsc] (ecmascript)");
;
const buildRequestLike = ()=>{
    try {
        const { headers } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/headers.js [app-rsc] (ecmascript)");
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextRequest"]("https://placeholder.com", {
            headers: headers()
        });
    } catch (e) {
        if (e && "message" in e && typeof e.message === "string" && e.message.toLowerCase().includes("Dynamic server usage".toLowerCase())) {
            throw e;
        }
        throw new Error(`Clerk: auth() and currentUser() are only supported in App Router (/app directory).
If you're using /pages, try getAuth() instead.
Original error: ${e}`);
    }
};
;
 //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "auth": (()=>auth),
    "initialState": (()=>initialState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$buildClerkProps$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/buildClerkProps.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$createGetAuth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/createGetAuth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/app-router/server/utils.js [app-rsc] (ecmascript)");
;
;
;
;
const auth = ()=>{
    const authObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$createGetAuth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createGetAuth"])({
        debugLoggerName: "auth()",
        noAuthStatusMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["authAuthHeaderMissing"])()
    })((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildRequestLike"])());
    const { notFound, redirect } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript)");
    authObject.protect = (params, options)=>{
        const paramsOrFunction = (params == null ? void 0 : params.redirectUrl) ? void 0 : params;
        const redirectUrl = (params == null ? void 0 : params.redirectUrl) || (options == null ? void 0 : options.redirectUrl);
        const handleUnauthorized = ()=>{
            if (redirectUrl) {
                redirect(redirectUrl);
            }
            notFound();
        };
        if (!authObject.userId) {
            return handleUnauthorized();
        }
        if (!paramsOrFunction) {
            return {
                ...authObject
            };
        }
        if (typeof paramsOrFunction === "function") {
            if (paramsOrFunction(authObject.has)) {
                return {
                    ...authObject
                };
            }
            return handleUnauthorized();
        }
        if (authObject.has(paramsOrFunction)) {
            return {
                ...authObject
            };
        }
        return handleUnauthorized();
    };
    return authObject;
};
const initialState = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$buildClerkProps$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildClerkProps"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildRequestLike"])());
};
;
 //# sourceMappingURL=auth.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/app-router/server/ClerkProvider.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClerkProvider": (()=>ClerkProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$mergeNextClerkPropsWithEnv$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/utils/mergeNextClerkPropsWithEnv.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$client$2f$ClerkProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/app-router/client/ClerkProvider.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-rsc] (ecmascript)");
;
;
;
;
function ClerkProvider(props) {
    var _a;
    const { children, ...rest } = props;
    const state = (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initialState"])()) == null ? void 0 : _a.__clerk_ssr_state;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$client$2f$ClerkProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ClientClerkProvider"], {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$mergeNextClerkPropsWithEnv$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeNextClerkPropsWithEnv"])(rest),
        initialState: state
    }, children);
}
;
 //# sourceMappingURL=ClerkProvider.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/app-router/server/controlComponents.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Protect": (()=>Protect),
    "SignedIn": (()=>SignedIn),
    "SignedOut": (()=>SignedOut)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-rsc] (ecmascript)");
;
;
function SignedIn(props) {
    const { children } = props;
    const { userId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    return userId ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, null, children) : null;
}
function SignedOut(props) {
    const { children } = props;
    const { userId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    return userId ? null : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
}
function Protect(props) {
    const { children, fallback, ...restAuthorizedParams } = props;
    const { has, userId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    const unauthorized = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, null, fallback != null ? fallback : null);
    const authorized = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
    if (!userId) {
        return unauthorized;
    }
    if (typeof restAuthorizedParams.condition === "function") {
        if (restAuthorizedParams.condition(has)) {
            return authorized;
        }
        return unauthorized;
    }
    if (restAuthorizedParams.role || restAuthorizedParams.permission) {
        if (has(restAuthorizedParams)) {
            return authorized;
        }
        return unauthorized;
    }
    return authorized;
}
;
 //# sourceMappingURL=controlComponents.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/clerkClient.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clerkClient": (()=>clerkClient),
    "createClerkClient": (()=>createClerkClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@0.38.7_react@19.1.0/node_modules/@clerk/backend/dist/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/constants.js [app-rsc] (ecmascript)");
;
;
const clerkClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Clerk"])({
    apiKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_KEY"],
    secretKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SECRET_KEY"],
    apiUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_URL"],
    apiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_VERSION"],
    userAgent: `${"@clerk/nextjs"}@${"4.30.0"}`,
    proxyUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PROXY_URL"],
    domain: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOMAIN"],
    isSatellite: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IS_SATELLITE"]
});
const createClerkClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Clerk"];
;
;
;
 //# sourceMappingURL=clerkClient.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/app-router/server/currentUser.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "currentUser": (()=>currentUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/clerkClient.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-rsc] (ecmascript)");
;
;
async function currentUser() {
    const { userId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    return userId ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["clerkClient"].users.getUser(userId) : null;
}
;
 //# sourceMappingURL=currentUser.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/utils/response.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isRedirect": (()=>isRedirect),
    "mergeResponses": (()=>mergeResponses),
    "setHeader": (()=>setHeader),
    "stringifyHeaders": (()=>stringifyHeaders)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/constants.js [app-rsc] (ecmascript)");
;
;
const mergeResponses = (...responses)=>{
    const normalisedResponses = responses.filter(Boolean).map((res)=>{
        if (res instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"]) {
            return res;
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"](res.body, res);
    });
    if (normalisedResponses.length === 0) {
        return;
    }
    const lastResponse = normalisedResponses[normalisedResponses.length - 1];
    const finalResponse = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"](lastResponse.body, lastResponse);
    for (const response of normalisedResponses){
        response.headers.forEach((value, name)=>{
            finalResponse.headers.set(name, value);
        });
        response.cookies.getAll().forEach((cookie)=>{
            const { name, value, ...options } = cookie;
            finalResponse.cookies.set(name, value, options);
        });
    }
    return finalResponse;
};
const isRedirect = (res)=>{
    return res.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.NextRedirect);
};
const setHeader = (res, name, val)=>{
    res.headers.set(name, val);
    return res;
};
const stringifyHeaders = (headers)=>{
    if (!headers) {
        return JSON.stringify({});
    }
    const obj = {};
    headers.forEach((value, name)=>{
        obj[name] = value;
    });
    return JSON.stringify(obj);
};
;
 //# sourceMappingURL=response.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/utils/pathMatchers.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "paths": (()=>paths)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$path$2d$to$2d$regexp$40$6$2e$2$2e$1$2f$node_modules$2f$path$2d$to$2d$regexp$2f$dist$2e$es2015$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/path-to-regexp@6.2.1/node_modules/path-to-regexp/dist.es2015/index.js [app-rsc] (ecmascript)");
;
const paths = {
    toRegexp: (path)=>{
        try {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$path$2d$to$2d$regexp$40$6$2e$2$2e$1$2f$node_modules$2f$path$2d$to$2d$regexp$2f$dist$2e$es2015$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathToRegexp"])(path);
        } catch (e) {
            throw new Error(`Invalid path: ${path}.
Consult the documentation of path-to-regexp here: https://github.com/pillarjs/path-to-regexp
${e.message}`);
        }
    }
};
;
 //# sourceMappingURL=pathMatchers.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/withClerkMiddleware.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "decorateResponseWithObservabilityHeaders": (()=>decorateResponseWithObservabilityHeaders),
    "withClerkMiddleware": (()=>withClerkMiddleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@0.38.7_react@19.1.0/node_modules/@clerk/backend/dist/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$1$2e$4$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$deprecated$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@1.4.1_react@19.1.0/node_modules/@clerk/shared/dist/deprecated.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$1$2e$4$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IC4FGZI3$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@1.4.1_react@19.1.0/node_modules/@clerk/shared/dist/chunk-IC4FGZI3.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/clerkClient.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/utils.js [app-rsc] (ecmascript)");
;
;
;
;
;
const decorateResponseWithObservabilityHeaders = (res, requestState)=>{
    requestState.message && res.headers.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.AuthMessage, encodeURIComponent(requestState.message));
    requestState.reason && res.headers.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.AuthReason, encodeURIComponent(requestState.reason));
    requestState.status && res.headers.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.AuthStatus, encodeURIComponent(requestState.status));
};
const withClerkMiddleware = (...args)=>{
    const noop = ()=>void 0;
    const [handler = noop, opts = {}] = args;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$1$2e$4$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IC4FGZI3$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deprecated"])("withClerkMiddleware", "Use `authMiddleware` instead.\nFor more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware");
    return async (req, event)=>{
        const { isSatellite, domain, signInUrl, proxyUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleMultiDomainAndProxy"])(req, opts);
        const requestState = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["clerkClient"].authenticateRequest({
            ...opts,
            apiKey: opts.apiKey || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_KEY"],
            secretKey: opts.secretKey || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SECRET_KEY"],
            frontendApi: opts.frontendApi || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FRONTEND_API"],
            publishableKey: opts.publishableKey || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PUBLISHABLE_KEY"],
            isSatellite,
            domain,
            signInUrl,
            proxyUrl,
            request: req
        });
        if (requestState.isUnknown) {
            const response = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"](null, {
                status: 401,
                headers: {
                    "Content-Type": "text/html"
                }
            });
            decorateResponseWithObservabilityHeaders(response, requestState);
            return response;
        }
        if (requestState.isInterstitial) {
            const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].rewrite(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["clerkClient"].remotePublicInterstitialUrl({
                apiUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_URL"],
                frontendApi: opts.frontendApi || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FRONTEND_API"],
                publishableKey: opts.publishableKey || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PUBLISHABLE_KEY"],
                clerkJSUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CLERK_JS_URL"],
                clerkJSVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CLERK_JS_VERSION"],
                proxyUrl: requestState.proxyUrl,
                isSatellite: requestState.isSatellite,
                domain: requestState.domain,
                debugData: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["debugRequestState"])(requestState),
                signInUrl: requestState.signInUrl
            }), {
                status: 401
            });
            decorateResponseWithObservabilityHeaders(response, requestState);
            return response;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setCustomAttributeOnRequest"])(req, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Attributes.AuthStatus, requestState.status);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setCustomAttributeOnRequest"])(req, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Attributes.AuthToken, requestState.token || "");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setCustomAttributeOnRequest"])(req, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Attributes.AuthMessage, requestState.message || "");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setCustomAttributeOnRequest"])(req, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Attributes.AuthReason, requestState.reason || "");
        const res = await handler(req, event);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decorateRequest"])(req, res, requestState);
    };
};
;
 //# sourceMappingURL=withClerkMiddleware.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/authenticateRequest.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "authenticateRequest": (()=>authenticateRequest),
    "handleInterstitialState": (()=>handleInterstitialState),
    "handleUnknownState": (()=>handleUnknownState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/clerkClient.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@0.38.7_react@19.1.0/node_modules/@clerk/backend/dist/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$withClerkMiddleware$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/withClerkMiddleware.js [app-rsc] (ecmascript)");
;
;
;
;
const authenticateRequest = async (req, opts)=>{
    const { isSatellite, domain, signInUrl, proxyUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleMultiDomainAndProxy"])(req, opts);
    return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["clerkClient"].authenticateRequest({
        ...opts,
        apiKey: opts.apiKey || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_KEY"],
        secretKey: opts.secretKey || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SECRET_KEY"],
        frontendApi: opts.frontendApi || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FRONTEND_API"],
        publishableKey: opts.publishableKey || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PUBLISHABLE_KEY"],
        isSatellite,
        domain,
        signInUrl,
        proxyUrl,
        request: req
    });
};
const handleUnknownState = (requestState)=>{
    const response = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiEndpointUnauthorizedNextResponse"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$withClerkMiddleware$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decorateResponseWithObservabilityHeaders"])(response, requestState);
    return response;
};
const handleInterstitialState = (requestState, opts)=>{
    const response = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["clerkClient"].localInterstitial({
        frontendApi: opts.frontendApi || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FRONTEND_API"],
        publishableKey: opts.publishableKey || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PUBLISHABLE_KEY"],
        clerkJSUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CLERK_JS_URL"],
        clerkJSVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CLERK_JS_VERSION"],
        proxyUrl: requestState.proxyUrl,
        isSatellite: requestState.isSatellite,
        domain: requestState.domain,
        debugData: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["debugRequestState"])(requestState),
        signInUrl: requestState.signInUrl
    }), {
        status: 401,
        headers: {
            "content-type": "text/html"
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$withClerkMiddleware$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decorateResponseWithObservabilityHeaders"])(response, requestState);
    return response;
};
;
 //# sourceMappingURL=authenticateRequest.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/redirect.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "redirectToSignIn": (()=>redirectToSignIn),
    "redirectToSignUp": (()=>redirectToSignUp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@0.38.7_react@19.1.0/node_modules/@clerk/backend/dist/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$response$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/utils/response.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/constants.js [app-rsc] (ecmascript)");
;
;
;
;
const redirectAdapter = (url)=>{
    const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$response$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setHeader"])(res, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.ClerkRedirectTo, "true");
};
const { redirectToSignIn, redirectToSignUp } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])({
    redirectAdapter,
    signInUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SIGN_IN_URL"],
    signUpUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SIGN_UP_URL"],
    publishableKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PUBLISHABLE_KEY"],
    frontendApi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FRONTEND_API"]
});
;
 //# sourceMappingURL=redirect.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/authMiddleware.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DEFAULT_API_ROUTES": (()=>DEFAULT_API_ROUTES),
    "DEFAULT_CONFIG_MATCHER": (()=>DEFAULT_CONFIG_MATCHER),
    "DEFAULT_IGNORED_ROUTES": (()=>DEFAULT_IGNORED_ROUTES),
    "authMiddleware": (()=>authMiddleware),
    "createRouteMatcher": (()=>createRouteMatcher)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+backend@0.38.7_react@19.1.0/node_modules/@clerk/backend/dist/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$1$2e$4$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$devBrowser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@1.4.1_react@19.1.0/node_modules/@clerk/shared/dist/devBrowser.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$1$2e$4$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ECUSKG7K$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@1.4.1_react@19.1.0/node_modules/@clerk/shared/dist/chunk-ECUSKG7K.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$response$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/utils/response.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$pathMatchers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/utils/pathMatchers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$debugLogger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/utils/debugLogger.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$authenticateRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/authenticateRequest.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$redirect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/redirect.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/utils.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const INFINITE_REDIRECTION_LOOP_COOKIE = "__clerk_redirection_loop";
const DEFAULT_CONFIG_MATCHER = [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)"
];
const DEFAULT_IGNORED_ROUTES = [
    `/((?!api|trpc))(_next.*|.+\\.[\\w]+$)`
];
const DEFAULT_API_ROUTES = [
    "/api/(.*)",
    "/trpc/(.*)"
];
const authMiddleware = (...args)=>{
    const [params = {}] = args;
    const { beforeAuth, afterAuth, publicRoutes, ignoredRoutes, apiRoutes, ...options } = params;
    const isIgnoredRoute = createRouteMatcher(ignoredRoutes || DEFAULT_IGNORED_ROUTES);
    const isPublicRoute = createRouteMatcher(withDefaultPublicRoutes(publicRoutes));
    const isApiRoute = createApiRoutes(apiRoutes);
    const defaultAfterAuth = createDefaultAfterAuth(isPublicRoute, isApiRoute, params);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$debugLogger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withLogger"])("authMiddleware", (logger)=>async (_req, evt)=>{
            if (options.debug) {
                logger.enable();
            }
            const req = withNormalizedClerkUrl(_req);
            logger.debug("URL debug", {
                url: req.nextUrl.href,
                method: req.method,
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$response$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringifyHeaders"])(req.headers),
                nextUrl: req.nextUrl.href,
                clerkUrl: req.experimental_clerkUrl.href
            });
            logger.debug("Options debug", {
                ...options,
                beforeAuth: !!beforeAuth,
                afterAuth: !!afterAuth
            });
            if (isIgnoredRoute(req)) {
                logger.debug({
                    isIgnoredRoute: true
                });
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDevelopmentFromApiKey"])(options.secretKey || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SECRET_KEY"]) && !params.ignoredRoutes) {
                    console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["receivedRequestForIgnoredRoute"])(req.experimental_clerkUrl.href, JSON.stringify(DEFAULT_CONFIG_MATCHER)));
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$response$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setHeader"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].next(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.AuthReason, "ignored-route");
            }
            const beforeAuthRes = await (beforeAuth && beforeAuth(req, evt));
            if (beforeAuthRes === false) {
                logger.debug("Before auth returned false, skipping");
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$response$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setHeader"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].next(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.AuthReason, "skip");
            } else if (beforeAuthRes && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$response$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isRedirect"])(beforeAuthRes)) {
                logger.debug("Before auth returned redirect, following redirect");
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$response$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setHeader"])(beforeAuthRes, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.AuthReason, "redirect");
            }
            const requestState = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$authenticateRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["authenticateRequest"])(req, options);
            if (requestState.isUnknown) {
                logger.debug("authenticateRequest state is unknown", requestState);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$authenticateRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleUnknownState"])(requestState);
            } else if (requestState.isInterstitial && isApiRoute(req)) {
                logger.debug("authenticateRequest state is interstitial in an API route", requestState);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$authenticateRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleUnknownState"])(requestState);
            } else if (requestState.isInterstitial) {
                logger.debug("authenticateRequest state is interstitial", requestState);
                assertClockSkew(requestState, options);
                const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$authenticateRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleInterstitialState"])(requestState, options);
                return assertInfiniteRedirectionLoop(req, res, options, requestState);
            }
            const auth = Object.assign(requestState.toAuth(), {
                isPublicRoute: isPublicRoute(req),
                isApiRoute: isApiRoute(req)
            });
            logger.debug(()=>({
                    auth: JSON.stringify(auth),
                    debug: auth.debug()
                }));
            const afterAuthRes = await (afterAuth || defaultAfterAuth)(auth, req, evt);
            const finalRes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$response$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeResponses"])(beforeAuthRes, afterAuthRes) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].next();
            logger.debug(()=>({
                    mergedHeaders: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$response$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringifyHeaders"])(finalRes.headers)
                }));
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$response$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isRedirect"])(finalRes)) {
                logger.debug("Final response is redirect, following redirect");
                const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$response$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setHeader"])(finalRes, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.AuthReason, "redirect");
                return appendDevBrowserOnCrossOrigin(req, res, options);
            }
            if (options.debug) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setRequestHeadersOnNextResponse"])(finalRes, req, {
                    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.EnableDebug]: "true"
                });
                logger.debug(`Added ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.EnableDebug} on request`);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decorateRequest"])(req, finalRes, requestState);
        });
};
const createRouteMatcher = (routes)=>{
    if (typeof routes === "function") {
        return (req)=>routes(req);
    }
    const routePatterns = [
        routes || ""
    ].flat().filter(Boolean);
    const matchers = precomputePathRegex(routePatterns);
    return (req)=>matchers.some((matcher)=>matcher.test(req.nextUrl.pathname));
};
const createDefaultAfterAuth = (isPublicRoute, isApiRoute, params)=>{
    return (auth, req)=>{
        if (!auth.userId && !isPublicRoute(req)) {
            if (isApiRoute(req)) {
                informAboutProtectedRoute(req.experimental_clerkUrl.pathname, params, true);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiEndpointUnauthorizedNextResponse"])();
            } else {
                informAboutProtectedRoute(req.experimental_clerkUrl.pathname, params, false);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$redirect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirectToSignIn"])({
                returnBackUrl: req.experimental_clerkUrl.href
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].next();
    };
};
const precomputePathRegex = (patterns)=>{
    return patterns.map((pattern)=>pattern instanceof RegExp ? pattern : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$pathMatchers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["paths"].toRegexp(pattern));
};
const matchRoutesStartingWith = (path)=>{
    path = path.replace(/\/$/, "");
    return new RegExp(`^${path}(/.*)?$`);
};
const withDefaultPublicRoutes = (publicRoutes)=>{
    if (typeof publicRoutes === "function") {
        return publicRoutes;
    }
    const routes = [
        publicRoutes || ""
    ].flat().filter(Boolean);
    const signInUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL || "";
    if (signInUrl) {
        routes.push(matchRoutesStartingWith(signInUrl));
    }
    const signUpUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL || "";
    if (signUpUrl) {
        routes.push(matchRoutesStartingWith(signUpUrl));
    }
    return routes;
};
const appendDevBrowserOnCrossOrigin = (req, res, opts)=>{
    var _a;
    const location = res.headers.get("location");
    const shouldAppendDevBrowser = res.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.ClerkRedirectTo) === "true";
    if (shouldAppendDevBrowser && !!location && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDevelopmentFromApiKey"])(opts.secretKey || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SECRET_KEY"]) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCrossOrigin"])(req.experimental_clerkUrl, location)) {
        const dbJwt = ((_a = req.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$1$2e$4$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ECUSKG7K$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEV_BROWSER_JWT_MARKER"])) == null ? void 0 : _a.value) || "";
        const url = new URL(location);
        const urlWithDevBrowser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$1$2e$4$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ECUSKG7K$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setDevBrowserJWTInURL"])(url, dbJwt, {
            hash: false
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].redirect(urlWithDevBrowser.href, res);
    }
    return res;
};
const createApiRoutes = (apiRoutes)=>{
    if (apiRoutes) {
        return createRouteMatcher(apiRoutes);
    }
    const isDefaultApiRoute = createRouteMatcher(DEFAULT_API_ROUTES);
    return (req)=>isDefaultApiRoute(req) || isRequestMethodIndicatingApiRoute(req) || isRequestContentTypeJson(req);
};
const isRequestContentTypeJson = (req)=>{
    const requestContentType = req.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].Headers.ContentType);
    return requestContentType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].ContentTypes.Json;
};
const isRequestMethodIndicatingApiRoute = (req)=>{
    const requestMethod = req.method.toLowerCase();
    return ![
        "get",
        "head",
        "options"
    ].includes(requestMethod);
};
const assertClockSkew = (requestState, opts)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDevelopmentFromApiKey"])(opts.secretKey || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SECRET_KEY"])) {
        return;
    }
    if (requestState.reason === "token-not-active-yet") {
        throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clockSkewDetected"])(requestState.message));
    }
};
const assertInfiniteRedirectionLoop = (req, res, opts, requestState)=>{
    var _a;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDevelopmentFromApiKey"])(opts.secretKey || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SECRET_KEY"])) {
        return res;
    }
    const infiniteRedirectsCounter = Number((_a = req.cookies.get(INFINITE_REDIRECTION_LOOP_COOKIE)) == null ? void 0 : _a.value) || 0;
    if (infiniteRedirectsCounter === 6) {
        if (requestState.reason === "token-expired") {
            throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clockSkewDetected"])(requestState.message));
        }
        throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["infiniteRedirectLoopDetected"])());
    }
    if (req.headers.get("referer") === req.url) {
        res.cookies.set({
            name: INFINITE_REDIRECTION_LOOP_COOKIE,
            value: `${infiniteRedirectsCounter + 1}`,
            maxAge: 3
        });
    }
    return res;
};
const withNormalizedClerkUrl = (req)=>{
    const clerkUrl = req.nextUrl.clone();
    const originUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$0$2e$38$2e$7_react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildRequestUrl"])(req);
    clerkUrl.port = originUrl.port;
    clerkUrl.protocol = originUrl.protocol;
    clerkUrl.host = originUrl.host;
    return Object.assign(req, {
        experimental_clerkUrl: clerkUrl
    });
};
const informAboutProtectedRoute = (path, params, isApiRoute)=>{
    if (params.debug || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDevelopmentFromApiKey"])(params.secretKey || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SECRET_KEY"])) {
        console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["informAboutProtectedRouteInfo"])(path, !!params.publicRoutes, !!params.ignoredRoutes, isApiRoute, DEFAULT_IGNORED_ROUTES));
    }
};
;
 //# sourceMappingURL=authMiddleware.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/index.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClerkProvider": (()=>ClerkProvider),
    "Protect": (()=>Protect),
    "SignedIn": (()=>SignedIn),
    "SignedOut": (()=>SignedOut),
    "auth": (()=>auth),
    "authMiddleware": (()=>authMiddleware),
    "clerkClient": (()=>clerkClient),
    "currentUser": (()=>currentUser),
    "redirectToSignIn": (()=>redirectToSignIn),
    "redirectToSignUp": (()=>redirectToSignUp),
    "withClerkMiddleware": (()=>withClerkMiddleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$ClerkProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/app-router/server/ClerkProvider.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$controlComponents$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/app-router/server/controlComponents.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$currentUser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/app-router/server/currentUser.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/clerkClient.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$authMiddleware$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/authMiddleware.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$redirect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/redirect.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$withClerkMiddleware$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@4.30.0_next@1_7aaa14a908b8d3e821791800a016e828/node_modules/@clerk/nextjs/dist/esm/server/withClerkMiddleware.js [app-rsc] (ecmascript)");
;
;
;
;
;
const ClerkProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$ClerkProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ClerkProvider"];
const SignedIn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$controlComponents$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SignedIn"];
const SignedOut = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$controlComponents$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SignedOut"];
const Protect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$controlComponents$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Protect"];
const auth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"];
const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$currentUser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["currentUser"];
const clerkClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["clerkClient"];
const authMiddleware = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$authMiddleware$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["authMiddleware"];
const redirectToSignIn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$redirect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirectToSignIn"];
const redirectToSignUp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$redirect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirectToSignUp"];
const withClerkMiddleware = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$4$2e$30$2e$0_next$40$1_7aaa14a908b8d3e821791800a016e828$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$withClerkMiddleware$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withClerkMiddleware"];
;
 //# sourceMappingURL=index.js.map
}}),

};

//# sourceMappingURL=117ce_%40clerk_nextjs_dist_esm_09509cc9._.js.map