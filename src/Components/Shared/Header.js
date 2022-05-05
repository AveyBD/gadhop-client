import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Hero from "../Hero/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faUserAltSlash } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div>
      <nav className="bg-white border-b-2">
        <div className="max-w-7xl flex-row-reverse md:flex-row flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row-reverse md:flex-row order-last md:order-first items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-fit w-fit pl-4 md:pl-0"
                  src={logo}
                  alt="Gadget Hope"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/"
                    className=" hover:bg-gray-700 hover:text-white duration-700 ease-in-out px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>

                  <Link
                    to="/"
                    className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Manage Inventory
                  </Link>

                  <Link
                    to="/"
                    className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    My Items
                  </Link>

                  <Link
                    to="/"
                    className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Blog
                  </Link>

                  <Link
                    to="/"
                    className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-white border inline-flex items-center justify-center p-2 rounded-md text-gray-400focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div>
            <h1 className="order-first md:order-last">
              {/* nav start  */}
              <button
                onClick={() => setIsUserOpen(!isUserOpen)}
                type="button"
                className="bg-white border rounded-full inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-white"
                aria-controls="profile-user-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open Profile menu</span>
                {!isOpen ? (
                  <FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon icon={faUserAltSlash}></FontAwesomeIcon>
                )}
              </button>
              {/* nav end  */}
            </h1>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/"
                  className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>

                <Link
                  to="/"
                  className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Manage Inventory
                </Link>

                <Link
                  to="/"
                  className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  My Items
                </Link>

                <Link
                  to="/"
                  className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Blog
                </Link>

                <Link
                  to="/"
                  className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </Transition>

        {/* profile menu  */}
        <Transition
          show={isUserOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:w-60 md:ml-auto" id="profile-user-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {user ? (
                  <>
                    <Link
                      to="/"
                      className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      My Items
                    </Link>

                    <Link
                      to="/"
                      className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Add Items
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Signout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Login
                    </Link>

                    <Link
                      to="/register"
                      className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </Transition>
        {/* profile menu end  */}
      </nav>
    </div>
  );
};

export default Header;
