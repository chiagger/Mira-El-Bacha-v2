import React from 'react';
import '../style/SideMenu.css';

const SideMenu: React.FC = () => {
  return (
    <aside className="side-menu">
      <p>Welcome! I am a 1st AD based in East London...</p>
      <ul>
        <li>Organized</li>
        <li>Inclusive</li>
        <li>Passionate</li>
      </ul>
    </aside>
  );
};

export default SideMenu;