import PropTypes from "prop-types";
import toogle_dark from "../../assets/day.png";
import T from "../../assets/T.png";

import toogle_light from "../../assets/night.png";
import search_icon_dark from "../../assets/search-b.png";
import search_icon_light from "../../assets/search-w.png";
import "./Navbar.css";

const Navbar = ({ theme, setTheme }) => {
  // Fonction pour changer le thème
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="logo">
        <img src={theme == "light" ? T : T} alt="" />
      </div>
      <ul>
        <li>Accueil</li>
        <li>À propos</li>
        <li>Contact</li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="Recherche..." />
        <img
          src={theme == "light" ? search_icon_light : search_icon_dark}
          alt="search"
        />
      </div>
      <img
        src={theme === "light" ? toogle_light : toogle_dark}
        alt="toggle theme"
        className="Toggle-icon"
        onClick={toggleTheme}
      />
    </nav>
  );
};

// Validation des props
Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Navbar;
