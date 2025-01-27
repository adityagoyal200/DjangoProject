export default function HomePage() {
    return (
      <div className="min-h-screen bg-zinc-900 text-white">
        <header className="bg-black shadow-md py-6 px-8 flex justify-between items-center border-b border-zinc-700">
          <h1 className="text-3xl font-extrabold text-white tracking-tight">E-Shop</h1>
          <nav className="flex items-center space-x-8">
            <ul className="flex space-x-8 text-zinc-400 font-medium">
              <li className="hover:text-white transition-colors cursor-pointer">Home</li>
              <li className="hover:text-white transition-colors cursor-pointer">Shop</li>
              <li className="hover:text-white transition-colors cursor-pointer">About</li>
              <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
            </ul>
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-700 transition-all">
              Logout
            </button>
          </nav>
        </header>
  
        <main className="px-8 py-16">
          <section className="bg-gradient-to-r from-zinc-700 to-zinc-800 text-white text-center py-24 rounded-lg shadow-lg">
            <h2 className="text-5xl font-extrabold leading-tight">Discover the Best Deals</h2>
            <p className="mt-6 text-lg font-light">Shop top-quality products at unbeatable prices</p>
            <button className="mt-8 bg-white text-black px-8 py-3 rounded-full font-semibold shadow-md hover:bg-zinc-200 transition-all">
              Shop Now
            </button>
          </section>
  
          <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-800 shadow-lg rounded-xl p-6 transform transition duration-300 hover:scale-105">
              <img src="/placeholder.jpg" alt="Product 1" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-2xl font-bold mt-4 text-white">Product 1</h3>
              <p className="text-zinc-400 mt-2 font-medium">$49.99</p>
              <button className="mt-6 bg-black text-white px-5 py-3 rounded-lg w-full hover:bg-zinc-700 transition-all">
                Add to Cart
              </button>
            </div>
            <div className="bg-zinc-800 shadow-lg rounded-xl p-6 transform transition duration-300 hover:scale-105">
              <img src="/placeholder.jpg" alt="Product 2" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-2xl font-bold mt-4 text-white">Product 2</h3>
              <p className="text-zinc-400 mt-2 font-medium">$59.99</p>
              <button className="mt-6 bg-black text-white px-5 py-3 rounded-lg w-full hover:bg-zinc-700 transition-all">
                Add to Cart
              </button>
            </div>
            <div className="bg-zinc-800 shadow-lg rounded-xl p-6 transform transition duration-300 hover:scale-105">
              <img src="/placeholder.jpg" alt="Product 3" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-2xl font-bold mt-4 text-white">Product 3</h3>
              <p className="text-zinc-400 mt-2 font-medium">$69.99</p>
              <button className="mt-6 bg-black text-white px-5 py-3 rounded-lg w-full hover:bg-zinc-700 transition-all">
                Add to Cart
              </button>
            </div>
          </section>
        </main>
  
        <footer className="bg-black text-white text-center py-8 mt-16 rounded-t-lg">
          <p className="text-lg">&copy; 2024 E-Shop. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  
  