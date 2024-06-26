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
          
          Welcome to our travel guide! Discover breathtaking destinations and hidden gems around the world. Our mission is to inspire and guide you through the most beautiful places to explore. Whether you're an adventurer seeking thrilling experiences or a traveler looking for serene retreats, we have something for everyone. Join us on this journey to uncover the wonders of the world and create unforgettable memories. Start your adventure today and explore the beauty that awaits you!
  
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
