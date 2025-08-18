import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    // output: "export",
    distDir: "build"
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

// https://www.youtube.com/watch?v=k0cjBuQFFYA