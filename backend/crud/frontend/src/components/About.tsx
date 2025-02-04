import Navbar from "./Navbar";

export default function About() {
    const year = new Date().getFullYear()
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Navbar />

      <main className="px-8 py-16 max-w-4xl mx-auto">
        <section className="text-center">
          <h1 className="text-5xl font-extrabold">About E-Shop</h1>
          <p className="mt-6 text-lg text-zinc-400">
            E-Shop is your one-stop destination for the best deals on high-quality products. 
            We are committed to delivering excellence, innovation, and customer satisfaction.
          </p>
        </section>

        <section className="mt-12 space-y-8">
          <div className="bg-zinc-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            <p className="mt-2 text-zinc-400">
              Our mission is to make online shopping seamless, affordable, and enjoyable for everyone.
            </p>
          </div>

          <div className="bg-zinc-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-white">Why Choose Us?</h2>
            <ul className="list-disc mt-2 pl-5 text-zinc-400 space-y-2">
              <li>Top-notch customer service</li>
              <li>High-quality products at unbeatable prices</li>
              <li>Fast and reliable shipping</li>
              <li>Secure payment methods</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white text-center py-6 mt-16 rounded-t-lg">
        <p className="text-lg">&copy; {year} E-Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}
