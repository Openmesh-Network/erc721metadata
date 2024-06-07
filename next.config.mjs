/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => [
    {
      source: "/metadata/xu/:call*",
      destination: "/metadata/xu/default.json",
    },
    {
      source: "/metadata/xue/:call*",
      destination: "/metadata/xue/default.json",
    },
  ],
  reactStrictMode: true,
}

export default nextConfig
