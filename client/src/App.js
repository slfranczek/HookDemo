import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UseStateDemo from './components/UseStateDemo';
import UseEffectDemo from './components/UseEffectDemo';
import UseContextDemo from './components/UseContextDemo';
import './App.css';

function App() {
  return (
    <Router>
    <div className="app-container">
        <div className="main-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/usestate" element={<UseStateDemo />} />
                <Route path="/useeffect" element={<UseEffectDemo />} />
                <Route path="/usecontext" element={<UseContextDemo />} />
            </Routes>
        </div>
    </div>
</Router>
  );
}

export default App;