import React from "react";
import logoClic from "../../../public/icon/Logo CLIC.png";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa6";
function FooterComponent() {
  return (
    <div>
      <>
        {/* component */}
        <div className="w-full pt-20 flex items-center justify-center bg-black">
          <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
            <div className="w-full text-7xl font-bold">
              <h1 className="w-full md:w-2/3">
                How can we help you. get in touch
              </h1>
            </div>
            <div className="flex mt-8 flex-col md:flex-row md:justify-between">
              <p className="w-full md:w-2/3 text-gray-400">
                Do not hesitate to contact us if you have any questions,
                comments, or need further assistance. We are ready to help you
                with pleasure!
              </p>
              <div className="w-44 pt-6 md:pt-0">
                <button
                  type="button"
                  className="bg-red-500 hover:bg-red-700 ease-in-out duration-100 px-10 py-3 flex items-center justify-center text-center rounded-lg"
                >
                  <a href="">Contact Us</a>
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex mt-24 mb-12 flex-row justify-between">
                <div>
                  <span className="font-bold">UKM CLIC</span>
                </div>

                <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                  About
                </a>
                <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                  Services
                </a>
                <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                  Why us
                </a>
                <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                  Contact
                </a>
                <div className="flex flex-row space-x-8 items-center justify-between">
                  <a href="https://www.instagram.com/clicunnes/">
                    <FaInstagram />
                  </a>
                  <a href="https://www.tiktok.com/@clicunnes">
                    <FaTiktok />
                  </a>
                  <a href="https://www.youtube.com/@UKMCLICUNNES">
                    <FaYoutube />
                  </a>
                </div>
              </div>
              <hr className="border-gray-600" />
              <p className="w-full text-center my-12 text-gray-600">
                Copyright © 2020 Naufal Pratama
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default FooterComponent;
