/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        // NextJs SSR styled components with swc  https://styled-components.com/d   ocs/advanced#with-swc
        // styledComponents: true,
        styledComponents: {
            ssr: true,
            displayName: true,
            fileName: true,
        },
    },
};

module.exports = nextConfig;
