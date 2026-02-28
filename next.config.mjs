/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "apsk-portofolio.vercel.app" }],
        permanent: true,
        destination: "https://apsk-dev.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
