import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const config: NextConfig = {
  output: "export",
  basePath: "/nextera",
  // Other Next.js configuration options
};

export default withNextIntl(config);
