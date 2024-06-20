import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto py-12 p-3  flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold">GrandTech Solutions</h2>
          <p className="mt-2">Building the future with technology</p>
        </div>

        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">
            <FaFacebookF className="text-2xl" />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <FaLinkedinIn className="text-2xl" />
          </a>
          <a href="/admin/dashboard" className="text-gray-300 hover:text-white">
            <span role="img" aria-label="admin-icon" className="text-2xl">
              👑
            </span>
          </a>
        </div>
      </div>

      <div className="bg-gray-800 py-4">
        <p className="text-center text-gray-500">
          © 2023 GrandTech Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
