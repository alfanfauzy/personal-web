import nextPwa from "next-pwa";
import runtimeCaching from "next-pwa/cache.js";
/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["raw.githubusercontent.com", "media2.dev.to"],
    },
};

const withPWA = nextPwa({
    register: true,
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    skipWaiting: true,
    runtimeCaching: [
        ...runtimeCaching,
        {
            urlPattern: /^https:\/\/.*\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/,
            handler: "CacheFirst",
            options: {
                cacheName: "images-cache",
                expiration: {
                    maxEntries: 100,
                    maxAgeSeconds: 60 * 60 * 24 * 30, // 30 hari
                },
                cacheableResponse: {
                    statuses: [0, 200],
                },
            },
        },
    ],
});

export default withPWA(nextConfig);
