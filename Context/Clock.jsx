
import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';

const Clock = () => {
  const language = useContext(LanguageContext);

  const getCurrentTimeMessage = () => {
    
    const messages = {
      en: 'Current time:',
      fr: 'Heure actuelle :',
      it: 'Ora attuale:',
    };

   
    return messages[language];
  };

  return (
    <div>
      <h2>{getCurrentTimeMessage()}</h2>
      <p>{new Date().toLocaleTimeString()}</p>
    </div>
  );
};

export default Clock;
