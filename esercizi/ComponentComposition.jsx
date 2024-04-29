import React, { useState } from 'react';
import './Container.scss'; 

const Container = ({ title, children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="container">
      <h2 onClick={toggleCollapsed}>{title}</h2>
      {!collapsed && (
        <div className="content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Container;
