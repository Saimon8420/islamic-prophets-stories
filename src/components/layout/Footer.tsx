import { Heart } from "lucide-react";
import { IslamicDivider } from "../common/IslamicDivider";
import { useTranslation } from "../../i18n/useTranslation";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="mt-auto border-t bg-card/50">
      <div className="container px-4 py-8">
        <IslamicDivider />

        <div className="grid gap-6 md:grid-cols-3 mt-6">
          <div>
            <h3 className="font-semibold mb-2">{t("footer.about")}</h3>
            <p className="text-sm text-muted-foreground">
              {t("stories.subtitle")}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">{t("footer.dataSources")}</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>{t("footer.quranSource")}</li>
              <li>{t("footer.ibnKathirSource")}</li>
              <li>{t("footer.hadithSource")}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 ">{t("footer.developer")}</h3>
            <a
              href="https://my-portfolio-seven-delta-60.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("footer.developerDesc")}
            </a>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            {t("footer.madeWith")}{" "}
            <Heart className="h-4 w-4 text-destructive fill-destructive" />{" "}
            {t("footer.forUmmah")}
          </p>
        </div>
      </div>
    </footer>
  );
};
