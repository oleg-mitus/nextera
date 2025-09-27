import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: "./messages/ru.json",
  },
});

const config: NextConfig = {
  output: "export",
  experimental: {
    // If you are using Turbopack with Next.js 15, specifically add `turbo` here.
    // This ensures next-intl adds aliases in the correct experimental key.
    turbo: {},
  },
  // Other Next.js configuration options
};

export default withNextIntl(config);
