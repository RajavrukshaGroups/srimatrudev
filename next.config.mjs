/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // ✅ Fix for static export
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
};


export default nextConfig;
