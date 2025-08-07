import React from 'react';
import './navbar.scss';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleSelect = (e) => {
    const path = e.target.value;
    if (path && path !== 'Our Services') {
      navigate(path);
    }
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="ggclogo.png" alt="Green Gold Club Logo" />
        <h1>Green Gold Club</h1>
      </div>
      <div className="links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/appreciation">Appreciation</Link></li>
          <li><Link to="/merchandise">Merchandise</Link></li>
          <li>
            <select
              name="services"
              defaultValue="Our Services"
              id="service"
              onChange={handleSelect}
            >
              <option disabled>Our Services</option>
              <option value="/development">Development</option>
              <option value="/Slider">Design</option>
              <option value="/marketing">Marketing</option>
            </select>
          </li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
