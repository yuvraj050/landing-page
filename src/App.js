import "./App.css";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container">
      <nav>
        <img src="images/logo.png" className="logo" alt="imaged" />
        <button className="btn" onClick={toggleMenu}>
          <img src="images/icon.png" alt="icon" /> Menu
        </button>
        <ul style={{ display: menuOpen ? "block" : "none" }}>
          <li><a href="#">Travel Guide</a></li>
          <li><a href="#">Famous Places</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
      <div className="content">
        <h1>
          Beautiful
          <br />
          Places to explore
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <form>
          <input type="text" placeholder="Country Name" />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
