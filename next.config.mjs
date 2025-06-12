import nextPwa from "next-pwa";
/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["raw.githubusercontent.com"],
    },
};

const withPWA = nextPwa({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
});

export default withPWA(nextConfig);
