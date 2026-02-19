import { useState } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const [leavingFrom, setLeavingFrom] = useState('Jaipur');
  const [destination, setDestination] = useState('');
  const [leavingOn, setLeavingOn] = useState('24 Feb 2026');
  const [duration, setDuration] = useState('5 - 6 nights');
  const [travelers, setTravelers] = useState('1 room, 2 adults');

  return (
    <section className="hero">
      <div className="hero__overlay" />

      <div className="hero__content">
        <h1 className="hero__title">Book Your Perfect Holiday</h1>
        <p className="hero__subtitle">Choose trips from our collection and plan your perfect trip</p>

        {/* Search Bar */}
        <div className="search-bar">
          <div className="search-field">
            <label>Leaving From</label>
            <input
              type="text"
              value={leavingFrom}
              onChange={e => setLeavingFrom(e.target.value)}
            />
          </div>

          <div className="search-divider" />

          <div className="search-field">
            <label>Destination</label>
            <input
              type="text"
              value={destination}
              onChange={e => setDestination(e.target.value)}
              placeholder="Destination name"
            />
          </div>

          <div className="search-divider" />

          <div className="search-field">
            <label>Leaving on</label>
            <div className="search-date">
              <input
                type="text"
                value={leavingOn}
                onChange={e => setLeavingOn(e.target.value)}
              />
              <Calendar size={18} className="date-icon" />
            </div>
          </div>

          <div className="search-divider" />

          <div className="search-field">
            <label>Duration</label>
            <div className="search-select-wrap">
              <select value={duration} onChange={e => setDuration(e.target.value)}>
                <option>5 - 6 nights</option>
                <option>3 - 4 nights</option>
                <option>7 - 10 nights</option>
                <option>10+ nights</option>
              </select>
              <ChevronDown size={14} className="select-arrow" />
            </div>
          </div>

          <div className="search-divider" />

          <div className="search-field">
            <label>Number of Travelers</label>
            <div className="search-select-wrap">
              <select value={travelers} onChange={e => setTravelers(e.target.value)}>
                <option>1 room, 2 adults</option>
                <option>1 room, 1 adult</option>
                <option>2 rooms, 4 adults</option>
                <option>3 rooms, 6 adults</option>
              </select>
              <ChevronDown size={14} className="select-arrow" />
            </div>
          </div>

          <button className="search-btn">Search</button>
        </div>
      </div>
    </section>
  );
}