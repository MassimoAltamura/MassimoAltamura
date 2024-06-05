import React from 'react';

const Welcome = ({ name, age }) => {
  return (
    <div>
      {!!age && <p>Age: {age}</p>}
      {age > 18 && <p>Age is greater than 18</p>}
      {age < 65 && <p>Age is less than 65</p>}
      {age > 18 && age < 65 && name === "John" && (
        <p>Name is John, age is between 18 and 65</p>
      )}
    </div>
  );
};

export default Welcome;



