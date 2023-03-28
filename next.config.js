const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    appDir: true,
  },
}

module.exports = withMDX(nextConfig)
