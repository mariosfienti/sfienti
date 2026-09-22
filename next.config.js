/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    // Static, already-optimized local assets only — no remote image domains needed.
    unoptimized: false
  }
};

module.exports = nextConfig;
