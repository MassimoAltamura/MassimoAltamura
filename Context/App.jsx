
import React, { useState } from 'react';
import Clock from './Clock';
import LanguageContext from './LanguageContext';

const App = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <h1>Language Selector</h1>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="it">Italy</option>
      </select>
      <LanguageContext.Provider value={language}>
        <Clock />
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
