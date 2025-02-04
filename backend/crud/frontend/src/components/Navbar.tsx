import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
    const navgiate = useNavigate();
  return (
    <header className="bg-black shadow-md py-6 px-8 flex justify-between items-center border-b border-zinc-700">
      <h1 className="text-3xl font-extrabold text-white tracking-tight">E-Shop</h1>
      <nav className="flex items-center space-x-8">
        <ul className="flex space-x-8 text-zinc-400 font-medium">
          <li className="hover:text-white transition-colors cursor-pointer" onClick={()=>navgiate('/Home')}>Home</li>
          <li className="hover:text-white transition-colors cursor-pointer" onClick={()=>navgiate('/Shop')}>Shop</li>
          <li className="hover:text-white transition-colors cursor-pointer" onClick={()=>navgiate('/About')}>About</li>
          <li className="hover:text-white transition-colors cursor-pointer" onClick={()=>navgiate('/Contact')}>Contact</li>
        </ul>
        <button className="bg-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-700 transition-all">
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Navbar;