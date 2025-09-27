import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const config: NextConfig = {
  output: "export",
  experimental: {
    turbo: {}, // Add this line
  },
};

export default withNextIntl(config);
