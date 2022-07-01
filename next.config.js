/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};

module.exports = withPlugins([
  [
    withPWA,
    {
      pwa: {
        disable: process.env.NODE_ENV !== "production",
        register: true,
        scope: "/",
        dest: "public",
        sw: "/service-worker.js",
      },
    },
  ],
  nextConfig,
]);

module.exports = nextConfig;
