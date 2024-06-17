import React, { useState } from "react";

export function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleToggleCollapse() {
    setCollapsed((t) => !t);
  }

  return (
    <div className="container">
      <div className="container-title">
        {title}
        <button onClick={handleToggleCollapse}>Toggle</button>
      </div>
      <div className={!collapsed ? 'container-content' : 'container-content-hidden'}>
        {children}
      </div>
    </div>
  );
}
