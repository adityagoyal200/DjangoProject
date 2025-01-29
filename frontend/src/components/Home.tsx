import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Navbar />

      <main className="px-8 py-16 flex flex-col items-center">
        <section className="relative w-full max-w-5xl text-center py-32 rounded-lg shadow-lg bg-gradient-to-r from-red-700 to-sky-800">
          <h1 className="text-6xl font-extrabold tracking-tight">
            Elevate Your Lifestyle
          </h1>
          <p className="mt-6 text-xl text-zinc-300 font-light">
            Discover a world where style meets innovation.
          </p>
          <button
            onClick={() => navigate("/about")}
            className="mt-8 bg-white text-black px-8 py-3 rounded-full font-semibold shadow-md hover:bg-zinc-200 transition-all"
          >
            Learn More
          </button>
        </section>

        <section className="mt-16 max-w-4xl text-center">
          <h2 className="text-4xl font-bold">What Sets Us Apart?</h2>
          <p className="mt-4 text-lg text-zinc-400">
            We believe in more than just shopping. We curate experiences, blend
            technology with style, and redefine quality. Every product is a
            statement—every choice, a lifestyle.
          </p>
        </section>

        <section className="mt-16 w-full max-w-4xl">
          <div className="bg-zinc-800 p-8 rounded-xl shadow-lg text-center">
            <h2 className="text-3xl font-semibold text-white">Join the Movement</h2>
            <p className="mt-4 text-lg text-zinc-400">
              Be part of a community that values quality, creativity, and
              individuality. Stay updated with exclusive insights and trends.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition-all"
            >
              Get in Touch
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
