import React from 'react';
import { useTranslation, initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import translations_en from './locales/en.json';
import translations_fr from './locales/fr.json';
import translations_ja from './locales/ja.json';


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translations_en,
      },
      fr: {
        translation: translations_fr,
      },    
     ja: {
        translation: translations_ja,
      },
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

function Main() {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('greeting', { name: 'Girish' })}</p>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fr')}>French</button>
      <button onClick={() => changeLanguage('ja')}>Japan</button>
    </div>
  );
}

export default Main;
