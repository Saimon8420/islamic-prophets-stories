import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Switch } from '../ui/switch';
import { Button } from '../ui/button';
import { useStore } from '../../store/useStore';
import { useTranslation } from '../../i18n/useTranslation';
import { LANGUAGE_OPTIONS } from '../../i18n/index';
import type { ThemeMode, FontSize } from '../../types/store';
import type { Language } from '../../types/prophet';

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SettingsDialog = ({ open, onOpenChange }: SettingsDialogProps) => {
  const { t } = useTranslation();
  const theme = useStore((s) => s.theme);
  const language = useStore((s) => s.language);
  const fontSize = useStore((s) => s.fontSize);
  const kidsMode = useStore((s) => s.kidsMode);
  const showQuranContent = useStore((s) => s.showQuranContent);
  const showIbnKathirContent = useStore((s) => s.showIbnKathirContent);
  const showHadithContent = useStore((s) => s.showHadithContent);

  const setTheme = useStore((s) => s.setTheme);
  const setLanguage = useStore((s) => s.setLanguage);
  const setFontSize = useStore((s) => s.setFontSize);
  const setKidsMode = useStore((s) => s.setKidsMode);
  const setShowQuranContent = useStore((s) => s.setShowQuranContent);
  const setShowIbnKathirContent = useStore((s) => s.setShowIbnKathirContent);
  const setShowHadithContent = useStore((s) => s.setShowHadithContent);
  const resetSettings = useStore((s) => s.resetSettings);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t('settings.title')}</DialogTitle>
          <DialogDescription>{t('settings.description')}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Theme */}
          <div className="space-y-2">
            <label className="text-sm font-medium">{t('settings.theme')}</label>
            <Select value={theme} onValueChange={(v) => setTheme(v as ThemeMode)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">{t('settings.themeLight')}</SelectItem>
                <SelectItem value="dark">{t('settings.themeDark')}</SelectItem>
                <SelectItem value="system">{t('settings.themeSystem')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Language */}
          <div className="space-y-2">
            <label className="text-sm font-medium">{t('settings.language')}</label>
            <Select value={language} onValueChange={(v) => setLanguage(v as Language)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {LANGUAGE_OPTIONS.map((lang) => (
                  <SelectItem key={lang.id} value={lang.id}>
                    {lang.nativeLabel} ({lang.label})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Font Size */}
          <div className="space-y-2">
            <label className="text-sm font-medium">{t('settings.fontSize')}</label>
            <Select value={fontSize} onValueChange={(v) => setFontSize(v as FontSize)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">{t('settings.fontSmall')}</SelectItem>
                <SelectItem value="medium">{t('settings.fontMedium')}</SelectItem>
                <SelectItem value="large">{t('settings.fontLarge')}</SelectItem>
                <SelectItem value="xlarge">{t('settings.fontXLarge')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Kids Mode */}
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium">{t('settings.kidsMode')}</label>
              <p className="text-xs text-muted-foreground">{t('settings.kidsModeDesc')}</p>
            </div>
            <Switch checked={kidsMode} onCheckedChange={setKidsMode} />
          </div>

          {/* Content Sources */}
          <div className="space-y-3">
            <label className="text-sm font-medium">{t('settings.contentSources')}</label>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm">{t('settings.showQuran')}</p>
                <p className="text-xs text-muted-foreground">{t('settings.showQuranDesc')}</p>
              </div>
              <Switch checked={showQuranContent} onCheckedChange={setShowQuranContent} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm">{t('settings.showIbnKathir')}</p>
                <p className="text-xs text-muted-foreground">{t('settings.showIbnKathirDesc')}</p>
              </div>
              <Switch checked={showIbnKathirContent} onCheckedChange={setShowIbnKathirContent} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm">{t('settings.showHadith')}</p>
                <p className="text-xs text-muted-foreground">{t('settings.showHadithDesc')}</p>
              </div>
              <Switch checked={showHadithContent} onCheckedChange={setShowHadithContent} />
            </div>
          </div>

          {/* Reset */}
          <Button variant="outline" size="sm" className="w-full" onClick={resetSettings}>
            {t('settings.resetDefaults')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
