
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importing the CSS file

class Welcome extends React.Component {
  render() {
    return <div className="welcome">Welcome!</div>;
  }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
