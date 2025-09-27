import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: "./messages/ru.json",
  },
});

const config: NextConfig = {
  output: "export",
  basePath: "/nextera",
  // Other Next.js configuration options
};

export default withNextIntl(config);
