import Link from "next/link";

export default function ManageAccountSidebar() {
  return (
    <div className="w-64 p-4 bg-gray-200">
      <h2 className="text-xl font-semibold mb-4">Account Management</h2>
      <ul className="space-y-2">
        <li>
          <Link href="/change-password">Change Password</Link>
        </li>
        <li>
          <Link href="/update-profile">Update Profile</Link>
        </li>
        <li>
          <Link href="/payment-history">Payment History</Link>
        </li>
        <li>
          <Link href="/notification-settings">Notification Settings</Link>
        </li>
        <li>
          <Link href="/billing-information">Billing Information</Link>
        </li>
        {/* Add more account management links as needed */}
        <li>
          <Link href="/preferences">Preferences</Link>
        </li>
        <li>
          <Link href="/security-settings">Security Settings</Link>
        </li>
        <li>
          <Link href="/privacy-settings">Privacy Settings</Link>
        </li>
        <li>
          <Link href="/subscription-details">Subscription Details</Link>
        </li>
      </ul>
    </div>
  );
}
