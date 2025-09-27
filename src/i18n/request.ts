import { hasLocale } from "next-intl";
import { getRequestConfig, setRequestLocale } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  setRequestLocale(locale);

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
