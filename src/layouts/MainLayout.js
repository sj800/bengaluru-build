import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';


const MainLayout = ({ children }) => (
  <>
    <Header />
    
    <main>{children}</main>

    <Footer />
  </>
);

export default MainLayout;
