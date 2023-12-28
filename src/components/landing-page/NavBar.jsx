import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
// import { logoClic } from "../../../public/logoClic.png";
function NavBar() {
  return (
    <div className="grid grid-cols-3 p-8 md:flex">
      <div className="md:order-2">
        <div className="md:hidden">
          <HamburgerIcon boxSize={32} />
        </div>
      </div>
      <div className="md:order-1">
        <img src="public/logoClic.png" alt="" />
      </div>
    </div>
  );
}

export default NavBar;
