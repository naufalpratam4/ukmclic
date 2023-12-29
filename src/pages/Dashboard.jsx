import React from "react";
import SideBar from "../components/sidebar/SideBar";
import { FaPeopleGroup } from "react-icons/fa6";
import logoClic from "../../public/icon/Logo CLIC.png";
import NavbarDashboard from "../components/NavbarDashboard";
function Dashboard() {
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
                          className="text-base text-white font-normal rounded-lg flex items-center p-2  bg-orange-500 group"
                        >
                          <svg
                            className="w-6 h-6 text-white  transition duration-75"
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
                          className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                        >
                          <FaPeopleGroup className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75" />
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
                        <a
                          href="#"
                          className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
                        >
                          View all
                        </a>
                      </div>
                      <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200">
                          <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src="https://demo.themesberg.com/windster/images/users/neil-sims.png"
                                  alt="Neil image"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                  Neil Sims
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  <a
                                    href="/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="17727a767e7b57607e7973646372653974787a"
                                  >
                                    [email&nbsp;protected]
                                  </a>
                                </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                $320
                              </div>
                            </div>
                          </li>
                          <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src="https://demo.themesberg.com/windster/images/users/bonnie-green.png"
                                  alt="Neil image"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                  Bonnie Green
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  <a
                                    href="/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="d4b1b9b5bdb894a3bdbab0a7a0b1a6fab7bbb9"
                                  >
                                    [email&nbsp;protected]
                                  </a>
                                </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                $3467
                              </div>
                            </div>
                          </li>
                          <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src="https://demo.themesberg.com/windster/images/users/michael-gough.png"
                                  alt="Neil image"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                  Michael Gough
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  <a
                                    href="/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="57323a363e3b17203e3933242332257934383a"
                                  >
                                    [email&nbsp;protected]
                                  </a>
                                </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                $67
                              </div>
                            </div>
                          </li>
                          <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src="https://demo.themesberg.com/windster/images/users/thomas-lean.png"
                                  alt="Neil image"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                  Thomes Lean
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  <a
                                    href="/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="284d45494144685f41464c5b5c4d5a064b4745"
                                  >
                                    [email&nbsp;protected]
                                  </a>
                                </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                $2367
                              </div>
                            </div>
                          </li>
                          <li className="pt-3 sm:pt-4 pb-0">
                            <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src="https://demo.themesberg.com/windster/images/users/lana-byrd.png"
                                  alt="Neil image"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                  Lana Byrd
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  <a
                                    href="/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="a2c7cfc3cbcee2d5cbccc6d1d6c7d08cc1cdcf"
                                  >
                                    [email&nbsp;protected]
                                  </a>
                                </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                $367
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                      <h3 className="text-xl leading-none font-bold text-gray-900 mb-10">
                        Acquisition Overview
                      </h3>
                      <div className="block w-full overflow-x-auto">
                        <table className="items-center w-full bg-transparent border-collapse">
                          <thead>
                            <tr>
                              <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                                Top Channels
                              </th>
                              <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                                Users
                              </th>
                              <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px" />
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            <tr className="text-gray-500">
                              <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                                Organic Search
                              </th>
                              <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                                5,649
                              </td>
                              <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                <div className="flex items-center">
                                  <span className="mr-2 text-xs font-medium">
                                    30%
                                  </span>
                                  <div className="relative w-full">
                                    <div className="w-full bg-gray-200 rounded-sm h-2">
                                      <div
                                        className="bg-cyan-600 h-2 rounded-sm"
                                        style={{ width: "30%" }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="text-gray-500">
                              <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                                Referral
                              </th>
                              <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                                4,025
                              </td>
                              <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                <div className="flex items-center">
                                  <span className="mr-2 text-xs font-medium">
                                    24%
                                  </span>
                                  <div className="relative w-full">
                                    <div className="w-full bg-gray-200 rounded-sm h-2">
                                      <div
                                        className="bg-orange-300 h-2 rounded-sm"
                                        style={{ width: "24%" }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="text-gray-500">
                              <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                                Direct
                              </th>
                              <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                                3,105
                              </td>
                              <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                <div className="flex items-center">
                                  <span className="mr-2 text-xs font-medium">
                                    18%
                                  </span>
                                  <div className="relative w-full">
                                    <div className="w-full bg-gray-200 rounded-sm h-2">
                                      <div
                                        className="bg-teal-400 h-2 rounded-sm"
                                        style={{ width: "18%" }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="text-gray-500">
                              <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                                Social
                              </th>
                              <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                                1251
                              </td>
                              <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                <div className="flex items-center">
                                  <span className="mr-2 text-xs font-medium">
                                    12%
                                  </span>
                                  <div className="relative w-full">
                                    <div className="w-full bg-gray-200 rounded-sm h-2">
                                      <div
                                        className="bg-pink-600 h-2 rounded-sm"
                                        style={{ width: "12%" }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="text-gray-500">
                              <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                                Other
                              </th>
                              <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                                734
                              </td>
                              <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                <div className="flex items-center">
                                  <span className="mr-2 text-xs font-medium">
                                    9%
                                  </span>
                                  <div className="relative w-full">
                                    <div className="w-full bg-gray-200 rounded-sm h-2">
                                      <div
                                        className="bg-indigo-600 h-2 rounded-sm"
                                        style={{ width: "9%" }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="text-gray-500">
                              <th className="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">
                                Email
                              </th>
                              <td className="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0">
                                456
                              </td>
                              <td className="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                                <div className="flex items-center">
                                  <span className="mr-2 text-xs font-medium">
                                    7%
                                  </span>
                                  <div className="relative w-full">
                                    <div className="w-full bg-gray-200 rounded-sm h-2">
                                      <div
                                        className="bg-purple-500 h-2 rounded-sm"
                                        style={{ width: "7%" }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <footer className="bg-white md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
                <ul className="flex items-center flex-wrap mb-6 md:mb-0">
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
                    >
                      Terms and conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
                    >
                      Licensing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
                    >
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-500 hover:underline"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="flex sm:justify-center space-x-6">
                  <a href="#" className="text-gray-500 hover:text-gray-900">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </footer>
              <p className="text-center text-sm text-gray-500 my-10">
                © 2019-2021{" "}
                <a href="#" className="hover:underline" target="_blank">
                  Themesberg
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

export default Dashboard;
