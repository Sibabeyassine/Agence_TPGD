import  { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css"; // Assure-toi d'importer le fichier CSS ici

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
