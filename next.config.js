/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com'], // must add image domain to allow image-loader to work
  },
};

module.exports = nextConfig;
