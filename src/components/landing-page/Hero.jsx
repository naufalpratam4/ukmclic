import { Icon } from "@chakra-ui/icon";
import React from "react";
import { FaPeopleGroup, FaPeopleLine } from "react-icons/fa6";
import heroImage from "../../../public/icon/Group 59.png";

function Hero() {
  return (
    <div className="md:flex">
      <div className="w-full md:order-2">
        <img src={heroImage} alt="" className="w-full" />
      </div>

      <div className="p-4 md:p-32 md:order-1">
        <div className="text-2xl font-semibold">
          Selamat Datang di Website UKM CLIC Universitas Negeri Semarang
        </div>
        <div className="  text-center pt-3">
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
                <span className="text-gray-500">50 Fungsio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
