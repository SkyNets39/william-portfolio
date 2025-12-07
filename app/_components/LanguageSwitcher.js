"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@mui/material";

export default function LanguageSwitcher({ props }) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations();

  function toggleLanguage() {
    const newLocale = locale === "en" ? "zh" : "en";
    const newPath = pathname.replace(/^\/(en|zh)/, `/${newLocale}`);
    router.push(newPath);
  }

  return (
    <Button
      onClick={toggleLanguage}
      sx={{
        // minWidth: { xs: "80%" },
        // mx: { xs: "auto" },
        color: "white",
        px: 2,
        background: "linear-gradient(270deg, #9300ff, #001effff)",
        backgroundSize: "400% 400%",
        animation: "languageGradient 30s ease infinite",
        "@keyframes languageGradient": {
          "0%": { backgroundPosition: "0% 46%" },
          "50%": { backgroundPosition: "100% 55%" },
          "100%": { backgroundPosition: "0% 46%" },
        },
        ...props,
      }}
    >
      {locale === "en" ? "中文" : "English"}
    </Button>
  );
}
