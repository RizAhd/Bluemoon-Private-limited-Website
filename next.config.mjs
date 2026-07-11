/** @type {import('next').NextConfig} */
// GitHub Pages serves a project repo from https://<user>.github.io/<repo>/, so we
// need a static export + a base path. Set via NEXT_PUBLIC_BASE_PATH in CI; empty
// locally so `npm run dev` works at the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
