import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ✅ Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/landing" className="text-2xl font-bold text-purple-700">
            Money_Manager
          </Link>

          {/* Menu Links */}
          <div className="space-x-6 hidden md:flex">
            <Link to="/landing" className="text-gray-700 hover:text-indigo-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
            <Link to="/login" className="text-purple-600 text-lg font-medium">Login</Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg "
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* ✅ Contact Section */}
      <section className="flex-grow max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-6">
          Contact Us
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Have questions, feedback, or need support? We’d love to hear from you.  
          Fill out the form below or reach us directly.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* 📧 Contact Info */}
          <div className="bg-indigo-50 rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-3">
              <span className="font-medium">Email:</span> support@moneymanager.com
            </p>
            <p className="text-gray-700 mb-3">
              <span className="font-medium">Phone:</span> +91 98765 43210
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Location:</span> Hyderabad, India
            </p>
          </div>

          {/* 📝 Contact Form */}
          <form className="bg-white border rounded-xl p-8 shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="bg-white shadow-inner py-6 text-center text-gray-600">
        © {new Date().getFullYear()} Money_Manager. All rights reserved.
      </footer>
    </div>
  );
};

export default Contact;
