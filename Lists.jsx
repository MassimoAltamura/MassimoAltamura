import React from 'react';


function Color({ color }) {
  return <li>{color.name}</li>;
}


function Colors({ colors }) {
  return (
    <ul>
      {colors.map(color => (
        <Color key={color.id} color={color} />
      ))}
    </ul>
  );
}


function App() {
  const colorsArray = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' }
  ];

  return (
    <div>
      <h1>Colors List</h1>
      <Colors colors={colorsArray} />
    </div>
  );
}

export default App;
