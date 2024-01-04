import { Icon } from "@chakra-ui/icon";
import React from "react";
import { FaPeopleGroup, FaPeopleLine } from "react-icons/fa6";
import heroImage from "../../../public/icon/Group 59.png";

function Hero() {
  return (
    <>
      <div className="md:flex md:order-1" id="hero">
        <div className="md:order-2 w-full">
          <img
            src={heroImage}
            alt=""
            className="h-96  object-cover object-center"
          />
        </div>

        <div className="w-full my-auto">
          <div className="text-2xl font-semibold px-9 ">
            Selamat Datang di Website UKM CLIC Universitas Negeri Semarang
          </div>
          <div className="pt-3 px-9">
            <div className="text-xl text-gray-500">Kepengurusan 2023/2024</div>
            <div className="text-xl font-bold pb-2">Kabinet Amanah</div>
            <div className="grid grid-cols-2 text-xl font-bold">
              <div>
                <Icon as={FaPeopleLine} />{" "}
                <span className="text-gray-500">7 Divisi</span>
              </div>
              <div>
                <div>
                  <Icon as={FaPeopleGroup} />{" "}
                  <span className="text-gray-500">50 Fungsionaris</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
