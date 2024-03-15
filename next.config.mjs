/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/perguntas",
        destination: "/faq",
        permanent: true,
      },
      // Wildcard path matching
      {
        source: "/blog/:s",
        destination: "/news/:s",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
