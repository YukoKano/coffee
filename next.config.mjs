/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  images: {
    domains: ["coffee.alexflipnote.dev"],
  },
};

export default nextConfig;
