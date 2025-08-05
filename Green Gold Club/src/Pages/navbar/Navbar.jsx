import React from 'react'
import './navbar.scss'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="logo"><img src="ggclogo.png" alt="" />
        <h1>Green Gold Club</h1></div>
        <div className="links">
            <ul>
                <li>Home</li>
                <li>Appreciation</li>
                <li>Merchandise</li>
                <li>
                    <select name="services" defaultValue="Our Services" id='service'>
                        <option disabled>Our Services</option>
                        <option value="/home">Development</option>
                        <option value="design">Design</option>
                        <option value="marketing">Marketing</option>
                    </select>
                </li>
                <li>Gallery</li>
                <li>Contact US</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar
