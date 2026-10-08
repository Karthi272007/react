/*
========================================================
TAILWIND CSS INSTALLATION
========================================================

Run these commands in the terminal:

npm install tailwindcss @tailwindcss/vite

Then configure vite.config.js:

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss()]
})

In src/index.css:

@import "tailwindcss";

========================================================
*/


import { useState } from "react"


function App() {

  /*
  ===============================================================================================================
  Q1. INSTALL AND CONFIGURE TAILWIND
  
  */

  // Tailwind is configured using vite.config.js
  // and @import "tailwindcss" in index.css.


  /*
  ============================================================================================================
  Q4. BUTTON GROUP

  */

  const [active, setActive] = useState("Home")


  /*
  =============================================================================================================
  Q5. REUSABLE BUTTON

  */

  function Button({ text, color }) {

    return (
      <button
        className={`${color} text-white px-4 py-2 rounded
        hover:opacity-80
        focus:ring-2
        active:scale-95`}
      >
        {text}
      </button>
    )

  }


  return (

    <div className="min-h-screen bg-gray-100">


      {/* =============================================================================================================================
          Q1. TAILWIND CSS
        */}

      <section className="p-5">

        <h1 className="text-3xl font-bold">
          Q1. Tailwind CSS
        </h1>

        <p className="mt-2">
          Tailwind CSS is installed and configured.
        </p>

      </section>



      {/* ========================================================================================================================
          Q2. CARD COMPONENT */}

      <section className="p-5">

        <h1 className="text-3xl font-bold mb-4">
          Q2. Card
        </h1>

        <div className="border rounded-lg p-5 bg-white">

          <h2 className="text-2xl font-bold">
            React Card
          </h2>

          <p className="mt-2 text-gray-600">
            This card uses spacing, typography and border utilities.
          </p>

        </div>

      </section>



      {/* ============================================================================================================================
          Q3. RESPONSIVE NAVBAR
          */}

      <section className="p-5">

        <h1 className="text-3xl font-bold mb-4">
          Q3. Responsive Navbar
        </h1>

        <nav className="bg-blue-600 text-white p-4">

          <div className="flex justify-between items-center">

            <h2 className="text-xl font-bold">
              My Website
            </h2>

            <div className="hidden md:flex gap-5">

              <a href="#">
                Home
              </a>

              <a href="#">
                About
              </a>

              <a href="#">
                Contact
              </a>

            </div>

          </div>

        </nav>

      </section>



      {/* ================================================================================================================
          Q4. BUTTON GROUP*/}

      <section className="p-5">

        <h1 className="text-3xl font-bold mb-4">
          Q4. Button Group
        </h1>

        <div className="flex gap-3">

          <button
            onClick={() => setActive("Home")}
            className={`px-4 py-2 rounded
            hover:bg-blue-700
            focus:ring-2
            active:scale-95
            ${active === "Home"
              ? "bg-blue-500 text-white"
              : "bg-gray-300"}`}
          >
            Home
          </button>


          <button
            onClick={() => setActive("Profile")}
            className={`px-4 py-2 rounded
            hover:bg-green-700
            focus:ring-2
            active:scale-95
            ${active === "Profile"
              ? "bg-green-500 text-white"
              : "bg-gray-300"}`}
          >
            Profile
          </button>


          <button
            onClick={() => setActive("Settings")}
            className={`px-4 py-2 rounded
            hover:bg-red-700
            focus:ring-2
            active:scale-95
            ${active === "Settings"
              ? "bg-red-500 text-white"
              : "bg-gray-300"}`}
          >
            Settings
          </button>

        </div>

        <p className="mt-3">
          Active: <b>{active}</b>
        </p>

      </section>

 {/* =================================================================================== */}
          {/* Q5. REUSABLE COMPONENT PROPS */}
          

      <section className="p-5">

        <h1 className="text-3xl font-bold mb-4">
          Q5. Reusable Buttons
        </h1>

        <div className="flex gap-3">

          <Button
            text="Save"
            color="bg-blue-500"
          />

          <Button
            text="Delete"
            color="bg-red-500"
          />

          <Button
            text="Success"
            color="bg-green-500"
          />

        </div>

      </section>


    </div>

  )
}


export default App
//====================================================================================================
// to install
// npm install tailwindcss @tailwindcss/vite
