/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // No ESLint config in this project yet; type errors still fail the build
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
}

export default nextConfig
