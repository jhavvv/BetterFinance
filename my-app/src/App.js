import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Infopage from './Pages/information.js';
import LoginPage from './LoginPage.js';
import RegisterPage from './RegisterPage.js';


function App() {
  return (
    <Router>
       <div className = "App">
        <Routes>
          <Route path="/" element={<Infopage />} />
          {/* <Route path="/register" element={<RegisterPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;