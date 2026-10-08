/*
Create 2 pages Dashboard page and Services page.
Using Reactjs navigate from Dashboard Page to Services.
Apply different themes for both the pages using Tailwind CSS.
*/


/*
Dashboard Page
*/

import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-purple-100 p-10">
      <h1 className="text-4xl font-bold text-purple-800">
        Dashboard
      </h1>

      <p className="mt-4 text-purple-700">
        Welcome to the Dashboard!
      </p>

      <Link
        to="/services"
        className="mt-6 inline-block rounded bg-purple-600 px-5 py-2 text-white hover:bg-purple-700"
      >
        Go to Services
      </Link>
    </div>
  );
}


/*
Services Page
*/

import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="min-h-screen bg-yellow-100 p-10">
      <h1 className="text-4xl font-bold text-yellow-800">
        Services
      </h1>

      <p className="mt-4 text-yellow-700">
        Here are our services.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block rounded bg-yellow-600 px-5 py-2 text-white hover:bg-yellow-700"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}


/*
App Page
*/

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Services from "./pages/Services";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}


/*
Main Page
*/

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
