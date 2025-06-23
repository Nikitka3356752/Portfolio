import React from 'react';
import { Outlet } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <div className="bg-black flex flex-col min-h-screen">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default App;