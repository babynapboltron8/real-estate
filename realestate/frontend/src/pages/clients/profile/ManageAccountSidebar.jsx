// ManageAccountSidebar.js
import React from "react";
import { Link } from "react-router-dom";

const ManageAccountSidebar = () => {
  return (
    <div className="w-64 p-4 bg-gray-200">
      <h2 className="text-xl font-semibold mb-4">Account Management</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/change-password">Change Password</Link>
        </li>
        <li>
          <Link to="/update-profile">Update Profile</Link>
        </li>
        <li>
          <Link to="/payment-history">Payment History</Link>
        </li>
        <li>
          <Link to="/notification-settings">Notification Settings</Link>
        </li>
        <li>
          <Link to="/billing-information">Billing Information</Link>
        </li>
        {/* Add more account management links as needed */}
        <li>
          <Link to="/preferences">Preferences</Link>
        </li>
        <li>
          <Link to="/security-settings">Security Settings</Link>
        </li>
        <li>
          <Link to="/privacy-settings">Privacy Settings</Link>
        </li>
        <li>
          <Link to="/subscription-details">Subscription Details</Link>
        </li>
      </ul>
    </div>
  );
};

export default ManageAccountSidebar;
