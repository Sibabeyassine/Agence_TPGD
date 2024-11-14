import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  const [theme, settheme] = useState("light");
  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} settheme={settheme} />
    </div>
  );
};

export default App;
