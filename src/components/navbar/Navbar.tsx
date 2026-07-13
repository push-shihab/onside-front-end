import React from "react";
import NavbarClient from "./NavbarClient";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full z-100 bg-transparent">
      <NavbarClient></NavbarClient>
    </div>
  );
};

export default Navbar;
