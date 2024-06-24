import { useState } from "react";

export function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(true);

  function handleToggleCollapse() {
    setCollapsed((collapse) => !collapse);
  }

  return (
    <div className="app">
      <div className="app-title"  onClick={ handleToggleCollapse }>
        {title} 
      </div>
      <div >
        {!collapsed && children}
      </div>
    </div>
  );
}
