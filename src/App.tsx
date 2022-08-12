import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import DashBoard from './components/DashBoard';
import { CreatePost } from './components/CreatePost'

function App() {
  return (
    <div>
      <NavBar />
      <DashBoard />
    </div>
  );
}

export default App;
