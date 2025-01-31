import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import LogoutPopup from "./LogoutPopup";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoutPopupOpen, setIsLogoutPopupOpen] = useState(false);

  const { authUser, logout } = useAuthStore();

  const handleLogout = () => {
    // Here you would handle the logout logic, like clearing user session, etc.
    logout()
    setIsLogoutPopupOpen(false); // Close the popup after logout
  };
  return (
    <>
   
    <nav className="bg-green-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Hamburger menu for mobile */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
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
            </button>
          </div>

          {/* Logo/Brand */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 text-xl font-semibold">MyToDo</div>
          </div>

          {/* Menu items for larger screens */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <Link
               to="/"
                className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
              to="/about"
                className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                to="/features"
                className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Features
              </Link>
              <Link
                to="/contact"
                className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Sign Up and Login buttons */}
          <div className="hidden sm:block ml-6  items-center space-x-4">
            {authUser ? (
              <button
                onClick={()=>{
                 
                  setIsLogoutPopupOpen(true)
                }}
                className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/signup"
                  className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="bg-white text-green-600 hover:bg-gray-100 hover:text-green-700 px-4 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu for smaller screens */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
            to="/features"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Features
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>

            <div className="mt-4 space-y-2  w-[50%] mx-auto">
              {authUser ? (
                <button
                  onClick={() => {
                    
                    setIsLogoutPopupOpen(true)
                    setIsMenuOpen((prev) => !prev);
                  }}
                  className="block text-center bg-green-700 text-white hover:bg-green-800 px-4 py-2 rounded-md"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/signup"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="block text-center bg-white  text-green-600 hover:bg-green-100 px-4 py-2 rounded-md"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="block text-center bg-[#15803D] text-white hover:bg-green-100 px-4 py-2 rounded-md"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
    <LogoutPopup
        isOpen={isLogoutPopupOpen}
        onClose={() => setIsLogoutPopupOpen(false)}
        onConfirm={handleLogout}
      />
    </>
  );
};

export default Navbar;
