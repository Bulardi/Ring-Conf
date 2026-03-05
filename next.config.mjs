const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/Ring-Conf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath
};

export default nextConfig;
