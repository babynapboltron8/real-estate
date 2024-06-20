import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { RiMenu3Fill } from "react-icons/ri";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import logo from "/src/assets/real_state_logo.png";
import profileImage from "/src/assets/myAvatar.png";

const SidebarLink = ({ icon, label }) => (
  <li className="flex items-center py-2">
    <span className="text-white mr-2" role="img" aria-label="icon">
      {icon}
    </span>
    <span className="text-white">{label}</span>
  </li>
);

SidebarLink.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

const AdminHeader = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!isUserDropdownOpen);
    setNotificationsOpen(false); // Close notifications if user dropdown is opened
  };

  const toggleNotifications = () => {
    setNotificationsOpen(!isNotificationsOpen);
    setUserDropdownOpen(false); // Close user dropdown if notifications are opened
  };

  const closeUserDropdown = () => {
    setUserDropdownOpen(false);
  };

  const closeNotifications = () => {
    setNotificationsOpen(false);
  };

  // Event listener to close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const header = document.getElementById("admin-header");
      if (header && !header.contains(event.target)) {
        closeUserDropdown();
        closeNotifications();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header id="admin-header" className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <button
            className="text-white focus:outline-none md:hidden"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? (
              <HiMenuAlt2 size={25} />
            ) : (
              <RiMenu3Fill size={25} style={{ transform: "scaleX(-1)" }} />
            )}
          </button>
          <Link
            to="/admin/dashboard"
            className="flex items-center text-xl font-bold"
          >
            <img src={logo} alt="logo" className="w-10 sm:w-12 mr-2" />
            <span className="text-xl">Company</span>
          </Link>
        </div>

        {/* Admin User Profile */}
        <div className="flex items-center">
          <span
            className="hidden lg:inline-block mr-4 text-gray-300 cursor-pointer"
            onClick={toggleUserDropdown}
          >
            Welcome, Admin User!
          </span>

          <div className="relative">
            <IoMdNotificationsOutline
              size={25}
              className="mr-4 cursor-pointer"
              onClick={toggleNotifications}
            />
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-md z-10">
                {/* Notification content */}
                <div className="py-2">
                  <p>Notification 1</p>
                  <p>Notification 2</p>
                  {/* Add more notifications as needed */}
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <img
              src={profileImage}
              alt="profile"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full cursor-pointer"
              onClick={toggleUserDropdown}
            />
            {isUserDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-md z-10">
                {/* Dropdown content */}
                <div className="py-2">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-800"
                    onClick={closeUserDropdown}
                  >
                    My Profile
                  </Link>
                  <button
                    className="block px-4 py-2 text-gray-800"
                    onClick={() => {
                      console.log("Logout clicked");
                      closeUserDropdown();
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {isSidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-gray-800 bg-opacity-20 z-40"
              onClick={toggleSidebar}
            ></div>
            <div
              className={`fixed inset-y-0  mt-16  left-0 transform ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              } w-64 bg-gray-800 overflow-y-auto transition-transform duration-300 ease-in-out md:hidden`}
            >
              <aside className="w-64 bg-gray-800 flex z-50 ">
                <div className="flex flex-col items-center h-full">
                  <nav className="w-full px-12 pt-6">
                    <ul className="space-y-2 md:space-y-3">
                      <SidebarLink
                        icon="📊"
                        label="Overview"
                        to="/admin/dashboard"
                      />
                      <SidebarLink
                        icon="👥"
                        label="Clients"
                        to="/admin/clients-list"
                      />
                      <SidebarLink
                        icon="🗺️"
                        label="Map & Lot"
                        to="/admin/map"
                      />
                      <SidebarLink
                        icon="👔"
                        label="Agents"
                        to="/admin/agents"
                      />
                      <SidebarLink icon="👤" label="User" to="/admin/user" />
                      <SidebarLink
                        icon="💵"
                        label="Financial"
                        to="/admin/financial"
                      />
                      <SidebarLink
                        icon="🏠"
                        label="Project"
                        to="/admin/project"
                      />
                    </ul>
                  </nav>
                  <div className="mt-auto">
                    <SidebarLink icon="⚙️" label="Settings" />
                  </div>
                </div>
              </aside>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default AdminHeader;
