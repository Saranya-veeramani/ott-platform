import React from 'react';

const Footer = () => {
  const footerStyle = {
    container: {
      backgroundColor: '#000',
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      fontSize: '1.2rem',
      marginBottom: '0.5rem',
    },
    watchText: {
      color: '#fff',
    },
    flixText: {
      color: 'red',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      marginBottom: '0.3rem',
    },
    redText: {
      color: 'red',
    },
  };

  return (
    <footer style={footerStyle.container}>
      <div style={footerStyle.column}>
        <h2 style={footerStyle.title}>
          <span style={footerStyle.watchText}>Watch</span>{' '}
          <span style={footerStyle.flixText}>Flix</span>
        </h2>
        {/* Watch Flix content */}
      </div>
      <div style={footerStyle.column}>
        <h2 style={{ ...footerStyle.title, ...footerStyle.redText }}>Connect Us</h2>
        <a href="/about" style={footerStyle.link}>-About</a>
        <a href="/contact" style={footerStyle.link}>-Contact Us</a>
        <a href="/help" style={footerStyle.link}>-HelpCenter</a>
        <a href="/career" style={footerStyle.link}>-Career</a>
      </div>
      <div style={footerStyle.column}>
        <h2 style={{ ...footerStyle.title, ...footerStyle.redText }}>Manage</h2>
        <a href="/account" style={footerStyle.link}>-Account</a>
        <a href="/manage-account" style={footerStyle.link}>-Manage Account</a>
        <a href="/buy-gift-card" style={footerStyle.link}>-Buy Gift Card</a>
        <a href="/redeem-gift-card" style={footerStyle.link}>-Redeem Gift Card</a>
      </div>
      <div style={footerStyle.column}>
        <h2 style={{ ...footerStyle.title, ...footerStyle.redText }}>Information</h2>
        <a href="/privacy" style={footerStyle.link}>-Privacy</a>
        <a href="/terms" style={footerStyle.link}>-Terms & Conditions</a>
        <a href="/cookies" style={footerStyle.link}>-Cookies</a>
        <a href="/faq" style={footerStyle.link}>-FAQ</a>
      </div>
    </footer>
  );
};

export default Footer;
