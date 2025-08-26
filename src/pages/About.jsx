import { Link } from "react-router-dom";

const About = () => {
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
            <Link to="/landing" className="text-gray-800 hover:text-indigo-600">Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-indigo-600">About Us</Link>
            <Link to="/contact" className="text-gray-800 hover:text-indigo-600">Contact</Link>
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

      {/* ✅ About Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center flex-grow">
        <h1 className="text-4xl font-bold text-indigo-700 mb-6">About Money Manager</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          Money Manager is your personal finance companion designed to help you track income, manage expenses, 
          categorize spending, and gain valuable insights into your financial habits.  
          With an easy-to-use dashboard, secure authentication, and filtering features, 
          you can stay in control of your money effortlessly.
        </p>

        {/* ✅ Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white shadow p-6 rounded-xl border">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Easy Tracking</h3>
            <p className="text-gray-700">Log your income and expenses with just a few clicks.</p>
          </div>

          <div className="bg-white shadow p-6 rounded-xl border">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Categorized Expenses</h3>
            <p className="text-gray-700">Organize your spending into meaningful categories.</p>
          </div>

          <div className="bg-white shadow p-6 rounded-xl border">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Insights & Reports</h3>
            <p className="text-gray-700">Visualize your financial data for better decision-making.</p>
          </div>
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="bg-gray-50 shadow-inner py-6 text-center text-gray-600">
        © {new Date().getFullYear()} Money_Manager. All rights reserved.
      </footer>
    </div>
  );
};

export default About;
