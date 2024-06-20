// Sidebar.js
import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Sidebar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const sidebarRef = useRef(null);

  const closeDropdown = useCallback(() => {
    setDropdownOpen(false);
    setActiveDropdown(null);
  }, []); // Empty dependency array because the function doesn't depend on any variable

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      closeDropdown();
    } else {
      setDropdownOpen(true);
      setActiveDropdown(dropdown);
    }
  };

  const handleClickOutside = useCallback(
    (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeDropdown();
      }
    },
    [closeDropdown]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <aside className="w-80 bg-gray-800 hidden sm:flex" ref={sidebarRef}>
      <div className="flex flex-col items-center h-full">
        {/* Sidebar Links */}
        <nav className="w-full px-12 pt-6">
          <ul className="space-y-2">
            {/* Overview Dropdown */}
            <SidebarDropdown
              label="Dashboard"
              icon="📊"
              isOpen={dropdownOpen && activeDropdown === "overview"}
              onToggle={() => toggleDropdown("overview")}
            >
              <SidebarLink label="Overview" to="/admin/dashboard" />
            </SidebarDropdown>
            {/* Clients Dropdown */}
            <SidebarDropdown
              label="Clients"
              icon="👥"
              isOpen={dropdownOpen && activeDropdown === "clients"}
              onToggle={() => toggleDropdown("clients")}
            >
              <SidebarLink label="All Clients" to="/admin/clients" />
              <SidebarLink label="Add Client" to="/admin/add-client" />
            </SidebarDropdown>

            {/* Agents Dropdown */}
            <SidebarDropdown
              label="Agents"
              icon="👔"
              isOpen={dropdownOpen && activeDropdown === "agents"}
              onToggle={() => toggleDropdown("agents")}
            >
              <SidebarLink label="All Agents" to="/admin/agents" />
              <SidebarLink label="Add Agent" to="/admin/add-agent" />
            </SidebarDropdown>
            {/* Map Dropdown */}
            <SidebarDropdown
              label="Map & Lot"
              icon="🗺️"
              isOpen={dropdownOpen && activeDropdown === "map"}
              onToggle={() => toggleDropdown("map")}
            >
              <SidebarLink label="Project Maps" to="/admin/map" />
              <SidebarLink label="Add Map" to="/admin/add-map" />
            </SidebarDropdown>
            {/* Users Dropdown */}
            <SidebarDropdown
              label="Users"
              icon="👨‍💼"
              isOpen={dropdownOpen && activeDropdown === "users"}
              onToggle={() => toggleDropdown("users")}
            >
              <SidebarLink label="All Users" to="/admin/users" />
              <SidebarLink label="Add User" to="/admin/add-user" />
            </SidebarDropdown>

            {/* Financial Dropdown */}
            <SidebarDropdown
              label="Financial"
              icon="💵"
              isOpen={dropdownOpen && activeDropdown === "financial"}
              onToggle={() => toggleDropdown("financial")}
            >
              <SidebarLink label="Price List" to="/admin/price-list" />
              <SidebarLink label="Add Price List" to="/admin/add-price-list" />
              <SidebarLink label="Collection" to="/admin/collection" />
            </SidebarDropdown>

            {/* Project Dropdown */}
            <SidebarDropdown
              label="Project"
              icon="🏠"
              isOpen={dropdownOpen && activeDropdown === "project"}
              onToggle={() => toggleDropdown("project")}
            >
              <SidebarLink label="All Project" to="/admin/projects" />
              <SidebarLink label="Add Project" to="/admin/add-project" />
            </SidebarDropdown>

            {/* Inquiry Dropdown */}
            <SidebarDropdown
              label="Inquiry"
              icon="📧"
              isOpen={dropdownOpen && activeDropdown === "inquiry"}
              onToggle={() => toggleDropdown("inquiry")}
            >
              <SidebarLink label="All Inquiry" to="/admin/all-inquiry" />
              <SidebarLink label="Add Contact" to="/admin/add-contact" />
            </SidebarDropdown>
          </ul>
          <div className="mt-4">
            <SidebarLink icon="⚙️" label="Settings" to="/admin/settings" />
          </div>
        </nav>
        {/* Settings */}
      </div>
    </aside>
  );
};

const SidebarLink = ({ icon, label, to }) => {
  return (
    <li className="flex items-center text-gray-300 hover:text-white cursor-pointer">
      {/* Use Link component with 'to' prop */}
      <Link to={to}>
        <span className="mr-2">{icon}</span>
        <span>{label}</span>
      </Link>
    </li>
  );
};

const SidebarDropdown = ({ label, icon, isOpen, onToggle, children }) => {
  return (
    <li className="space-y-2">
      <span
        className="flex items-center text-gray-300 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation(); // Prevent the click from closing the dropdown
          onToggle();
        }}
      >
        <span className="mr-2">{icon}</span>
        <span>{label}</span>
      </span>
      {isOpen && <ul className="pl-4">{children}</ul>}
    </li>
  );
};

// PropTypes validation for SidebarLink
SidebarLink.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

// PropTypes validation for SidebarDropdown
SidebarDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Sidebar;
