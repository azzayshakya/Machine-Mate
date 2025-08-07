
import  { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const HomeTopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full sticky top-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-black">
          YourLogo
        </div>

        <ul className="hidden md:flex gap-8 font-semibold text-info ">
          <li className="hover:text-primary cursor-pointer transition">Demo</li>
          <li className="hover:text-primary cursor-pointer transition">Features</li>
          <li className="hover:text-primary cursor-pointer transition">Docs</li>
        </ul>

        <button className="hidden md:block bg-primary text-white  px-8 py-3 text-lg font-semibold rounded-lg hover:bg-primary-light transition shadow-md hover:shadow-none">
          Purchase
        </button>

        <div className="md:hidden z-50" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col items-center gap-4 py-6 text-gray-700 font-medium text-base">
            <li className="hover:text-black cursor-pointer transition">Demo</li>
            <li className="hover:text-black cursor-pointer transition">Features</li>
            <li className="hover:text-black cursor-pointer transition">Docs</li>
            <li>
              <button className="bg-primary text-white px-5 py-2 text-sm font-semibold rounded-md hover:bg-gray-800 transition">
                Purchase
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default HomeTopBar;
