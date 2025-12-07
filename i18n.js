import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  // Fallback ke 'en' kalau locale undefined
  const validLocale = locale || "en";

  try {
    const messages = (await import(`./messages/${validLocale}.json`)).default;

    return {
      locale: validLocale, // ⭐ TAMBAHKAN INI - PENTING!
      messages: messages,
    };
  } catch (error) {
    const fallbackMessages = (await import(`./messages/en.json`)).default;
    return {
      locale: "en", // ⭐ TAMBAHKAN INI JUGA
      messages: fallbackMessages,
    };
  }
});
