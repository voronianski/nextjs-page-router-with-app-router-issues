/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['default', 'en-us', 'de-de', 'fr-fr'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  trailingSlash: true,
};

export default nextConfig;