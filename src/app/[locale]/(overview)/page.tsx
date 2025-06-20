import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("app")
  return (
    <div className="min-h-screen pt-10">
      <h1 className="text-4xl font-bold text-center"> {t("hello")} House For Life</h1>
    </div>
  );
}
