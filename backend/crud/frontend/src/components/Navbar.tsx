import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

const handleLogout = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/accounts/logout/', {});
    console.log(response.data); 
  } catch (error) {
    console.error("Error logging out:", error);
  }
};


  return (
    <header className="bg-black shadow-md py-6 px-8 flex justify-between items-center border-b border-zinc-700">
      <h1 className="text-3xl font-extrabold text-white tracking-tight">E-Shop</h1>
      <nav className="flex items-center space-x-8">
        <ul className="flex space-x-8 text-zinc-400 font-medium">
          <li className="hover:text-white transition-colors cursor-pointer" onClick={() => navigate('/Home')}>Home</li>
          <li className="hover:text-white transition-colors cursor-pointer" onClick={() => navigate('/Shop')}>Shop</li>
          <li className="hover:text-white transition-colors cursor-pointer" onClick={() => navigate('/About')}>About</li>
          <li className="hover:text-white transition-colors cursor-pointer" onClick={() => navigate('/Contact')}>Contact</li>
        </ul>
        <button
          className="bg-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-700 transition-all"
          onClick={handleLogout}  // Call handleLogout on button click
        >
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
