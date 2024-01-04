import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import logoClic from "../../../public/icon/logoClic.png";
function NavBar() {
  return (
    <>
      <div className="flex flex-wrap place-items-center sticky top-0">
        <section className="relative mx-auto">
          {/* navbar */}
          <nav className="flex justify-between bg-white text-black w-screen border-b-2 ">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <a className="text-3xl font-bold font-heading" href="#">
                {/* <img class="h-9" src="logo.png" alt="logo"> */}
                <img src={logoClic} alt="" />
              </a>
              {/* Nav Links */}
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <a className="hover:text-orange-500" href="/#hero">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-orange-500" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="hover:text-orange-500" href="#visi">
                    Visi Misi
                  </a>
                </li>
                <li>
                  <a className="hover:text-orange-500" href="#divisi">
                    Divisi
                  </a>
                </li>
              </ul>
              {/* Header Icons */}
              <div className="hidden xl:flex items-center space-x-5 ">
                {/* Sign In / Register      */}
                <a className="flex items-center hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* Responsive navbar */}

            <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </nav>
        </section>
      </div>
      {/* Does this resource worth a follow? */}
      <div className="fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Follow me on twitter"
            href="https://www.twitter.com/asad_codes"
            target="_blank"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
