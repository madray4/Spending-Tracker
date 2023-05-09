import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Navbar from './components/Navbar'

// pages
import Home from './pages/Home';
import CreateEntry from './pages/CreateEntry';
import EditEntry from './pages/EditEntry';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home/>}
            />
            <Route
              path="/add-entry"
              element={<CreateEntry/>}
            />
            <Route
              path="/edit-entry/:id"
              element={<EditEntry/>}
            />
            <Route
              path="/login"
              element={<Login/>}
            />
            <Route
              path="/Signup"
              element={<Signup/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;