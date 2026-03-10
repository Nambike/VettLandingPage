import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "react-native",
    "react-native-web",
    "react-native-paper",
    "react-native-safe-area-context",
    "react-native-vector-icons",
    "@nambike/shared",
  ],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web",
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];
    return config;
  },
  experimental: {},
  turbopack: {
    resolveAlias: {
      "react-native": "react-native-web"
    }
  }
};

export default nextConfig;
