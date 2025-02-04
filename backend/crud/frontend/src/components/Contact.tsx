import Navbar from "./Navbar";
import { useState } from "react";

export default function Contact() {
    const year = new Date().getFullYear()
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({ name: "", email: "", message: "" }); // Reset form
    };

    return (
        <div className="min-h-screen bg-zinc-900 text-white">
        <Navbar />

        <main className="px-8 py-16 max-w-3xl mx-auto">
            <section className="text-center">
            <h1 className="text-5xl font-extrabold">Contact Us</h1>
            <p className="mt-4 text-lg text-zinc-400">
                Have a question? Reach out to us, and we'll get back to you as soon as possible.
            </p>
            </section>

            <form onSubmit={handleSubmit} className="mt-12 bg-zinc-800 p-6 rounded-xl shadow-lg space-y-6">
            <div>
                <label className="block text-zinc-400 text-lg">Name</label>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-lg bg-zinc-700 text-white focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="Enter your name"
                required
                />
            </div>

            <div>
                <label className="block text-zinc-400 text-lg">Email</label>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-lg bg-zinc-700 text-white focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="Enter your email"
                required
                />
            </div>

            <div>
                <label className="block text-zinc-400 text-lg">Message</label>
                <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-2 p-3 h-32 rounded-lg bg-zinc-700 text-white focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="Your message..."
                required
                />
            </div>

            <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg shadow-md hover:bg-red-700 transition-all"
            >
                Send Message
            </button>
            </form>
        </main>

        <footer className="bg-black text-white text-center py-6 mt-16 rounded-t-lg">
            <p className="text-lg">&copy; {year} E-Shop. All rights reserved.</p>
        </footer>
        </div>
    );
}
