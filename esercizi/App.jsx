import React from 'react';
import Welcome from './Welcome';
import { UncontrolledLogin } from './UncontrolledForm';
import List from './List';
import { LanguageProvider, useLanguage } from './LanguageContext';
import Clock from './Clock';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  }; return (
    <select value={language} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="es">Spanish</option>
      <option value="fr">French</option>
      <option value="de">German</option>
      <option value='it'>Italia</option>
    </select>
  );
};

const App = () => {
  const colorsArray = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' }
  ];

  return (
    <div>
      <LanguageProvider>
      <div>
        <LanguageSelector />
        <Clock />
      </div>
    </LanguageProvider>
      <h1>Welcome Component</h1>
      
      <UncontrolledLogin />
      <h1>Colors List</h1>
      <List items={colorsArray} />
     
    </div>
  );
};

export default App;


