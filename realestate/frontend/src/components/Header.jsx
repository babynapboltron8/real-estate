import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import logo from "/src/assets/real_state_logo.png";

export default function Header() {
  const [isNavSidebarOpen, setIsNavSidebarOpen] = useState(false);

  const handleNavClick = () => {
    setIsNavSidebarOpen(!isNavSidebarOpen);
  };

  const closeNavSidebar = () => {
    setIsNavSidebarOpen(false);
  };

  const navigationLinks = [
    { to: "/", text: "Home" },
    { to: "/project", text: "Project" },
    { to: "/about", text: "About" },
    { to: "/map", text: "Map" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <header className="relative shadow-lg bg-slate-50 bg-opacity-50 z-30">
      <div className="flex justify-between items-center max-w-5xl mx-auto p-3">
        <Link to="/">
          <img src={logo} alt="logo" className="w-12" />
        </Link>
        <div className="flex gap-4 items-center">
          <ul className="hidden sm:flex gap-4 text-sm font-semibold">
            {navigationLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                <li className="text-slate-700 hover:underline">{link.text}</li>
              </Link>
            ))}
          </ul>
          <div className="flex gap-4 text-sm items-center">
            <Link to="/login">
              <li className="hidden sm:inline hover:bg-blue-600 bg-blue-500 py-2 px-5 text-sm rounded-md transition duration-300 text-white font-medium ">
                Login
              </li>
            </Link>
            <div className="relative inline-block">
              <button
                onClick={handleNavClick}
                className="text-slate-700 font-semibold hover:underline sm:hidden relative transition duration-300"
              >
                <RiMenu3Fill size={20} />
              </button>
              {isNavSidebarOpen && (
                <>
                  <div
                    onClick={closeNavSidebar}
                    className="fixed inset-0 bg-black opacity-25 transition duration-500"
                  ></div>
                  <div className="fixed inset-y-0 right-0 w-48 bg-white z-30 overflow-y-auto transition duration-500">
                    <button
                      className="p-4 text-slate-700 font-semibold hover:underline"
                      onClick={closeNavSidebar}
                    >
                      <RiCloseFill size={30} />
                    </button>
                    <ul className="p-6">
                      {navigationLinks.map((link) => (
                        <li
                          key={link.to}
                          onClick={closeNavSidebar}
                          className="mb-2 text-base"
                        >
                          <Link
                            to={link.to}
                            className="text-slate-700 hover:underline"
                          >
                            {link.text}
                          </Link>
                        </li>
                      ))}
                      <Link to="/login">
                        <li onClick={closeNavSidebar} className="mb-2 mt-6">
                          <div className="hover:bg-blue-600 bg-blue-500 py-2 px-5 text-lg rounded-md transition duration-300 text-white font-medium ">
                            Login
                          </div>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
