import React from 'react';
import eco from '../assets/photos/ecomerce.jpg'; 
import { Link } from 'react-router-dom'; 

const MainPage = () => {
  return (
    <div 
      className="min-h-screen bg-black flex items-center justify-center py-10 relative"
      style={{ backgroundImage: `url(${eco})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="bg-black bg-opacity-70 p-8 rounded-xl shadow-xl w-full max-w-lg space-y-8 transform hover:scale-105 transition-transform duration-500 text-white">
        <h2 className="text-3xl font-semibold text-center mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Welcome to Our Store
        </h2>
        
        <div className="space-y-4">
          <Link to="/signup">
            <button
              className="w-full py-3 rounded-md bg-zinc-600 hover:bg-zinc-500 text-white font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button
              className="w-full py-3 rounded-md bg-zinc-600 hover:bg-zinc-500 text-white font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
