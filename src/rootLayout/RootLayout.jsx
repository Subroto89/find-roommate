import React from "react";
import Navbar from "../components/navbar/Navbar";
import {Outlet} from 'react-router';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <div>
      <nav className="sticky top-0 z-1000">
        <Navbar></Navbar>
      </nav>
      <main className="min-h-screen pt-2 z-10">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;
