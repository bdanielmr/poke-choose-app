const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    poke_remote_1: `poke_remote_1@${process.env.NEXT_PUBLIC_REMOTE_BASE_URL}/_next/static/${location}/remoteEntry.js`,
    poke_remote_2: `poke_remote_2@${process.env.NEXT_PUBLIC_REMOTE_2_BASE_URL}/_next/static/${location}/remoteEntry.js`,
    poke_remote_3: `poke_remote_3@${process.env.NEXT_PUBLIC_REMOTE_3_BASE_URL}/_next/static/${location}/remoteEntry.js`,
  };
};
const nextConfig = {
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  reactStrictMode: false,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "poke_host_orquest",
        filename: "static/chunks/remoteEntry.js",
        remotes: remotes(options.isServer),
        exposes: {
          "./PokeCard": "src/components/PokeCard/PokeCard.tsx",
        },
        extraOptions: {
          exposePages: true,
          automaticAsyncBoundary: true,
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;