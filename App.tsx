import * as React from 'react';
import './style.css';
import Box from './components/Box';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      {/* hello World */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/builder" element={<Box />} />
      </Routes>
    </div>
  );
}
