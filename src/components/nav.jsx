import { useState} from "react";


export default function Nav() {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
    <>
      <div className="navbar">
        <p className={darkMode ? "p-navbar-dark" : "p-navbar"}>
          where in the world?
        </p>
        <button
          className={darkMode ? "button-dark" : "button"}
          onClick={toggleDarkMode}
        >
          Dark Mode
        </button>
      </div>
    </>
  );
}
