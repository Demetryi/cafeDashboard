import {useRouter} from 'next/router';

export const useTranslate = <T, K extends keyof T>(texts: T): T[K] => {
  const {locale, defaultLocale} = useRouter();
  return texts[locale] || texts[defaultLocale];
};
