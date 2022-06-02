import React, { useState } from "react";
import "./App.css";

import NavBar  from "./components/NavBar";
import Footer from "./components/Footer";
import Switch from "./components/Switch";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Switch />
        <Footer />
      </div>
    </div>
  );
}

export default App;
