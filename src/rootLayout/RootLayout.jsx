import React from "react";
import Navbar from "../components/navbar/Navbar";
import {Outlet} from 'react-router';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <div>
      <nav className="sticky top-0">
        <Navbar></Navbar>
      </nav>
      <main className="min-h-screen">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;
