import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import TeamPage from './pages/TeamPage';
import MissionPage from './pages/MissionPage';
import OrderPage from './pages/OrderPage';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

const App: React.FC = () => (
  <div className="app">
    <ScrollToTop />
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/about" element={<MissionPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;
