import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

function Layout({ children }: any) {
  return (
    <div className="content flex-col flex h-full w-full">
      <Navbar />
      {children}
      <div className="absolute bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
