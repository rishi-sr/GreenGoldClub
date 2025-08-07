import React, { useState } from 'react';
import './events.scss';

import { Link } from 'react-router-dom';

const events = [
  { img: "1.jpg", url:"#",name: "Prithvi" },
  { img: "2.jpg", url:"#",name: "Cleanliness Drive" },
  { img: "3.jpg", url:"#",name: "Tree Plantation" },
  { img: "4.jpg", url:"#",name: "Animal Welfare Camp" },
  { img: "5.JPG", url:"#",name: "Earth Day" },
  { img: "6.JPG", url:"#",name: "Eco Fest" },
];
const Scroll = [
  {url:"/prithvi",name: "Prithvi" },
  {url:"#",name: "Cleanliness Drive" },
  {url:"#",name: "Tree Plantation" },
  {url:"#",name: "Animal Welfare Camp" },
  {url:"#",name: "Earth Day" },
  {url:"#",name: "Eco Fest" },
  {url:"/prithvi",name: "Prithvi" },
  {url:"#",name: "Cleanliness Drive" },
  {url:"#",name: "Tree Plantation" },
  {url:"#",name: "Animal Welfare Camp" },
  {url:"#",name: "Earth Day" },
  {url:"#",name: "Eco Fest" },
  {url:"#",name: "Eco Fest" },
  {url:"/prithvi",name: "Prithvi" },
  {url:"#",name: "Cleanliness Drive" },
  {url:"#",name: "Tree Plantation" },
  {url:"#",name: "Animal Welfare Camp" },
  {url:"#",name: "Earth Day" },
  {url:"#",name: "Eco Fest" },
  {url:"#",name: "Eco Fest" },
  {url:"/prithvi",name: "Prithvi" },
  {url:"#",name: "Cleanliness Drive" },
  {url:"#",name: "Tree Plantation" },
  {url:"#",name: "Animal Welfare Camp" },
  {url:"#",name: "Earth Day" },
  {url:"#",name: "Eco Fest" },
];

const Events = () => {
    const[query, setQuery]=useState('');

    const filteredEvents = Scroll.filter(Scroll =>
    Scroll.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="events">
      <div className="heading">
        <h1>Explore Our Events</h1>
      </div>
      <div className="event-details">

        {/* Event search and scroll */}
        <div className="scroll">
            <input type="search" name="" id="search-query" placeholder="Search events..." onChange={(e) => setQuery(e.target.value)}/>
            <div className='list'>
                {filteredEvents.length > 0 ? (
              filteredEvents.map((Scroll, index) => (
                <p key={index}><Link to={Scroll.url} id='para'>{Scroll.name}</Link></p>
              ))
            ) : (
              <p>No matching events found.</p>
            )}
            </div>
        </div>


        {/* Event Images and List */}
        <div className="eventslist">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <img src={event.img} alt={`GGC-Event-${index}`} />
              <div className="overlay"></div>
              <h1>{event.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
