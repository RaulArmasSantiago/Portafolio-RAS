import React from 'react';
import './App.css';
import Home from './Components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { router } from './Router/Router'
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={router} />
    </div>

  );
}

export default App;
