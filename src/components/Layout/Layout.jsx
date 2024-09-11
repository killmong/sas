import React from 'react';
import Header from '../Header/Header';// Assuming you already have the Header component
import Footer from '../Footer/Footer'; // Assuming you already have the Footer component

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main> {/* Page-specific content will be injected here */}
      <Footer />
    </div>
  );
};

export default Layout;
