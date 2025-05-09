import { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/users', // 프론트엔드에서 호출할 경로
        destination: 'http://localhost:4000/users', // 백엔드 주소
      },
    ];
  },
  // CORS 설정 (devServer에서)
  devServer: {
    allowedOrigins: ['http://localhost:4000'], // 백엔드 서버 주소
  },
};

export default config;
