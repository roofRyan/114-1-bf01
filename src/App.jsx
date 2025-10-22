// App.jsx

import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />{" "}
      </main>{" "}
      <Footer />
    </div>
  );
}

