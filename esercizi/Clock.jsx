import React from 'react';
import { useLanguage } from './LanguageContext';

const translations = {
  en: 'Current time',
  es: 'Hora actual',
  fr: 'Heure actuelle',
  de: 'Aktuelle Uhrzeit',
  it:'ora corretta'
};

const Clock = () => {
  const { language } = useLanguage();
  const time = new Date().toLocaleTimeString();

  return (
    <div>
      <h2>{translations[language]}: {time}</h2>
    </div>
  );
};

export default Clock;
