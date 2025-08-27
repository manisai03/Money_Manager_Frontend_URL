💻 Money_Manager Frontend

The frontend application for the Money_Manager project provides a user-friendly interface to manage personal finances. It connects to the backend API to perform user authentication, transaction tracking, category management, and profile updates.

This application is built with React and styled using modern UI libraries, offering a clean and responsive design for desktop and mobile devices.

🚀 Features:

=> User registration, login, and authentication via JWT tokens

=> Dashboard to view income, expenses, and balance

=> Add, update, and delete income/expense transactions

=> Manage categories (create, update, delete)

=> Profile management (update user info, profile photo)

=> Responsive design for desktop and mobile

=> API integration with Money_Manager backend

🛠️ Tech Stack:

=. Frontend Framework: React.js (Vite / Create React App)

=> Styling: Tailwind CSS / CSS Modules

=> State Management: Context API / Redux (if used)

=> Routing: React Router

=> HTTP Client: Axios / Fetch API

=> Icons & UI Components: lucide-react, shadcn/ui (if used)

=> Other Tools: Postman (for backend testing), npm / yarn

⚙️ Environment Configuration:

=> Create a .env file in the root directory and configure the backend API URL:

VITE_API_BASE_URL=https://money-manager-backend-10.onrender.com/api



🐳 Running the Frontend Locally:

=> 1️⃣ Install dependencies
       npm install

=> 2️⃣ Start the development server
       npm run dev

The app will run on http://localhost:5173 (or port specified in Vite config)

It will connect to your backend API to fetch and update data


📡 Live Deployment:

=> Hosted on: Netlify

=> Live URL: https://your-netlify-app-url.netlify.app

Users can access the app directly through this URL without installing anything locally.


🧪 Testing:

=> Run unit tests (if configured):
     npm test

End-to-end or manual testing can be done by interacting with the UI while connected to the backend.

📦 Deployment Instructions:

=> Can be deployed on Netlify / Vercel / Render / GitHub Pages

=> Ensure the backend API URL in the .env file is correctly configured for production
