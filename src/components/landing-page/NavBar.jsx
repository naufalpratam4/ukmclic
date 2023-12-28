import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";

function NavBar() {
  return (
    <div className="grid grid-cols-3 p-8 md:flex">
      <div className="md:order-2">
        <div className="md:hidden">
          <HamburgerIcon boxSize={32} />
        </div>
      </div>
      <div className="md:order-1">
        <img src="assets/logoClic.png" alt="" />
      </div>
    </div>
  );
}

export default NavBar;
