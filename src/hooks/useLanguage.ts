import { useEffect } from 'react';
import { useStore } from '../store/useStore';

export function useLanguageEffect() {
  const language = useStore((state) => state.language);
  const fontSize = useStore((state) => state.fontSize);

  useEffect(() => {
    const html = document.documentElement;

    html.removeAttribute('dir');
    html.removeAttribute('lang');
    document.body.classList.remove('lang-bn', 'lang-ar');

    if (language === 'ar') {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
      document.body.classList.add('lang-ar');
    } else if (language === 'bn') {
      html.setAttribute('lang', 'bn');
      document.body.classList.add('lang-bn');
    }
  }, [language]);

  useEffect(() => {
    document.body.classList.remove('font-small', 'font-medium', 'font-large', 'font-xlarge');
    document.body.classList.add(`font-${fontSize}`);
  }, [fontSize]);
}
