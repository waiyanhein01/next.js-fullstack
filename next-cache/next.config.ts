import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  reactCompiler: true,
  redirects() {
    return [
      {
        source: "/blog/:path*",
        destination: "/posts/:path*",
        permanent: false,
      },
      {
        source: "/old-blog",
        destination: "/posts",
        permanent: true, //301 redirect
      },
    ];
  },
};

export default nextConfig;
