/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites(){
    return [
      {
        source: '/:path*',
        destination: '/:path*'
      },
      {
        source: '/:path*',
        destination: 'https://jveiga.dev/:path*'
      },
      {
        source: '/',
        destination: 'https://jveiga.dev/'
      },
    ]
  }
}

module.exports = nextConfig
