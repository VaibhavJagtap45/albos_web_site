import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/**
 * Content-Security-Policy.
 *
 * Tuned for this app's actual needs so the UI is never broken:
 *  - 'unsafe-inline' on script-src: Next.js App Router injects inline bootstrap
 *    scripts and we ship an inline JSON-LD <script> in the root layout (no nonce).
 *  - 'unsafe-eval' is added ONLY in development (React Fast Refresh uses eval);
 *    production stays strict without it.
 *  - 'unsafe-inline' on style-src: framer-motion / gsap / Tailwind inject inline styles.
 *  - img-src allows data: and blob: for inline SVG noise textures and three.js/WebGL.
 *  - upgrade-insecure-requests + object-src 'none' + frame-ancestors 'self' are the
 *    high-signal directives Google Safe Browsing / Ads review looks for.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https:",
  "media-src 'self'",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  "frame-src 'self'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
]
  .join("; ")
  .concat(";");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  // Force HTTPS for 2 years incl. subdomains; eligible for the HSTS preload list.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Stop browsers from MIME-sniffing a response away from its declared type.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Clickjacking protection (legacy header; CSP frame-ancestors is the modern one).
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Don't leak full URLs to third parties; keep origin on cross-site.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Lock down powerful APIs the site never uses.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
];

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: ["localhost", "127.0.0.1"],
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  // Don't advertise the framework — small but real fingerprinting reduction.
  poweredByHeader: false,
  async headers() {
    return [
      {
        // Apply the security headers to every route.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
