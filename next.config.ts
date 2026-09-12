import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/pages/about-us", destination: "/about", permanent: true },
      { source: "/pages/contact-us", destination: "/contact", permanent: true },
      { source: "/our-approach", destination: "/approach", permanent: true },
      { source: "/our-solution", destination: "/products", permanent: true },
    ];
  },
};

export default nextConfig;
