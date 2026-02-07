import { Settings, Moon, Sun, Monitor, Baby } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "../../hooks/useTheme";
import { useStore } from "../../store/useStore";
import { useTranslation } from "../../i18n/useTranslation";

interface HeaderProps {
  onSettingsClick: () => void;
}

export const Header = ({ onSettingsClick }: HeaderProps) => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const kidsMode = useStore((state) => state.kidsMode);
  const setKidsMode = useStore((state) => state.setKidsMode);

  const ThemeIcon = theme === "dark" ? Moon : theme === "light" ? Sun : Monitor;

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📖</span>
            <div>
              <h1 className="text-lg font-bold leading-tight">
                {t("common.appName")}
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                {t("stories.subtitle")}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant={kidsMode ? "islamic" : "ghost"}
            size="icon"
            onClick={() => setKidsMode(!kidsMode)}
            title={t("settings.kidsMode")}
          >
            <Baby className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            title={t("settings.theme")}
          >
            <ThemeIcon className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={onSettingsClick}
            title={t("settings.title")}
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
