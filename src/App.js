// Scroll Animation
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react'; // Import useEffect
import './media-query.css';
import './style.css';

import { Route, Routes } from "react-router-dom";

// Components
import Footer from './Components/Header and Footer/Footer';
import Header from './Components/Header and Footer/Header';
import TopInfo from './Components/Top Information/Top-Information';

// Routing Components
import Home from '../src/Components/Routing/RoutingParts/Home';
import Account from './Components/Routing/RoutingParts/Account';
import Wishlist from './Components/Routing/RoutingParts/Wishlist';

// Routing
import MobileHeader from './Components/Header and Footer/MobileHeader';
import Fixmenu from './Components/Routing/FixMenu/Fixmenu';

function App() {
  // Initialize AOS after the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Run animation only once
    });
  }, []);

  return (
    <>
      {/* Mobile Header */}
      <MobileHeader />

      {/* Top Information */}
      <TopInfo />

      {/* Header */}
      <Header />

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>

      {/* Footer */}
      <Footer />

      {/* Fixed Menu for Routing */}
      <Fixmenu />
    </>
  );
}

export default App;
