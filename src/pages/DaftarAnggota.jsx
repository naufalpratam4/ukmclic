import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import NavbarDashboard from "../components/NavbarDashboard";
import { useState } from "react";
import Modal from "../components/modal/daftar-anggota/ModalAnggota";
import ModalAnggota from "../components/modal/daftar-anggota/ModalAnggota";
const Anggota = [
  {
    nama: "Naufal Darma Yuda Pratama",
    posisi: "Ketua",
    profil: "public/icon/Logo CLIC.png",
    jurusan: "Ilmu Komputer 2021",
  },
  {
    nama: "Abir",
    posisi: "Ketua Baru",
    profil: "public/icon/Logo CLIC.png",
    jurusan: "Kesmas 2022",
  },
];
function DaftarAnggota() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <>
        {/* This is an example component */}
        <div>
          <NavbarDashboard />
          <div className="flex overflow-hidden bg-white pt-16">
            <aside
              id="sidebar"
              className="fixed hidden z-20 h-full top-0 left-0 pt-16  lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
              aria-label="Sidebar"
            >
              <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
                <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                  {/* TopBar */}
                  <div className="flex-1 px-3 bg-white divide-y space-y-1">
                    <ul className="space-y-2 pb-2">
                      <li>
                        <form action="#" method="GET" className="lg:hidden">
                          <label htmlFor="mobile-search" className="sr-only">
                            Search
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <svg
                                className="w-5 h-5 text-gray-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                              </svg>
                            </div>
                            <input
                              type="text"
                              name="email"
                              id="mobile-search"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600  block w-full pl-10 p-2.5"
                              placeholder="Search"
                            />
                          </div>
                        </form>
                      </li>
                      <li>
                        <a
                          href="dashboard"
                          className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                        >
                          <svg
                            className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                          </svg>
                          <span className="ml-3">Dashboard</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="daftar-anggota"
                          className="text-base text-white font-normal rounded-lg flex items-center p-2  bg-orange-500 group"
                        >
                          <FaPeopleGroup className="w-6 h-6 text-white  transition duration-75" />
                          <span className="ml-3 flex-1 whitespace-nowrap">
                            Daftar Anggota
                          </span>
                        </a>
                      </li>
                    </ul>
                    <div className="space-y-2 pt-2"></div>
                  </div>
                </div>
              </div>
            </aside>
            <div
              className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
              id="sidebarBackdrop"
            />
            <div
              id="main-content"
              className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
            >
              {/* === Main === */}
              <main>
                <div className="pt-6 px-4">
                  <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
                    <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold leading-none text-gray-900">
                          Daftar Anggota
                        </h3>

                        <ModalAnggota />
                      </div>

                      <div className="flow-root">
                        <ul>
                          {Anggota.map((anggota, index) => (
                            <li key={index} className="py-3 sm:py-4">
                              <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                  <img src={anggota.profil} width={"30px"} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900 truncate">
                                    {anggota.nama}
                                  </p>
                                  <p className="text-sm text-gray-500 truncate">
                                    <a
                                      href={`/cdn-cgi/l/email-protection`}
                                      className="__cf_email__"
                                      data-cfemail={`17727a767e7b57607e7973646372653974787a`}
                                    >
                                      {anggota.posisi}
                                    </a>
                                  </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                  {anggota.jurusan}
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </main>

              <p className="text-center text-sm text-gray-500 my-10">
                © 2023{" "}
                <a href="#" className="hover:underline" target="_blank">
                  Naufal Pratama
                </a>
                . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default DaftarAnggota;
