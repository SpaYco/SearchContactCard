import React from 'react';
import UserAvatar from './UserAvatar';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserAvatar profileImageUrl="https://randomuser.me/api/portraits/women/55.jpg" trust={75} />
    </div>
  );
}

export default App;
