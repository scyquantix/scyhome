import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@scyquantix/ui"],
  poweredByHeader: false,
  // Nesta fase o site é uma página única; as páginas de produto ficam no código, sem exposição.
  async redirects() {
    return [{ source: "/produtos/:slug", destination: "/", permanent: false }];
  },
};

export default nextConfig;
