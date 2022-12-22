/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [`${process.cwd()}/app`],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig