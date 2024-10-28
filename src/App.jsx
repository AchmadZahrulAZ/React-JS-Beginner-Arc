import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Header from './components/Header/Header.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Team from './components/Team/Team.jsx';
import Quotes from './components/Quotes/Quotes.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <Team />
      <Quotes />
      <Footer />
    </div>
  );
}

export default App;

