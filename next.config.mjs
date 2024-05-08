/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"atexstudents.files.wordpress.com"
            }
        ]
    }
};

export default nextConfig;
