/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Monaco Editor webpack configuration
    config.resolve.alias = {
      ...config.resolve.alias,
      'monaco-editor': '@monaco-editor/react',
    }
    return config
  },
}

module.exports = nextConfig 