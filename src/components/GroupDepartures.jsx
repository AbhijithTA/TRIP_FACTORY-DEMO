import { Users, Calendar, MapPin } from 'lucide-react';
import './GroupDepartures.css';

const departures = [
  {
    id: 1,
    title: 'Golden Triangle India',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&auto=format&fit=crop',
    date: '15 Mar 2026',
    duration: '7 Nights / 8 Days',
    seats: 6,
    price: '₹45,999',
    location: 'Delhi · Agra · Jaipur',
  },
  {
    id: 2,
    title: 'Thailand Explorer',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&auto=format&fit=crop',
    date: '22 Mar 2026',
    duration: '6 Nights / 7 Days',
    seats: 4,
    price: '₹52,999',
    location: 'Bangkok · Phuket · Krabi',
  },
  {
    id: 3,
    title: 'Europe Highlights',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&auto=format&fit=crop',
    date: '10 Apr 2026',
    duration: '12 Nights / 13 Days',
    seats: 3,
    price: '₹1,89,999',
    location: 'Paris · Rome · Barcelona',
  },
  {
    id: 4,
    title: 'Vietnam & Cambodia',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format&fit=crop',
    date: '5 Apr 2026',
    duration: '9 Nights / 10 Days',
    seats: 8,
    price: '₹74,999',
    location: 'Hanoi · Ho Chi Minh · Siem Reap',
  },
];

export default function GroupDepartures() {
  return (
    <section className="group-dep">
      <div className="section-inner">
        <div className="section-header">
          <div>
            <h2 className="section-title">Upcoming Group Departures</h2>
            <p className="section-sub">Join fellow travelers on our curated group tours</p>
          </div>
          <a href="#" className="view-all">View All →</a>
        </div>

        <div className="group-grid">
          {departures.map(dep => (
            <div className="group-card" key={dep.id}>
              <div className="group-card__img">
                <img src={dep.image} alt={dep.title} loading="lazy" />
                <div className="group-card__seats">
                  <Users size={13} />
                  <span>{dep.seats} seats left</span>
                </div>
              </div>
              <div className="group-card__body">
                <h3>{dep.title}</h3>
                <div className="group-card__meta">
                  <span><MapPin size={13} /> {dep.location}</span>
                  <span><Calendar size={13} /> {dep.date}</span>
                </div>
                <p className="group-card__duration">{dep.duration}</p>
                <div className="group-card__footer">
                  <div>
                    <span className="group-card__from">Starting from</span>
                    <span className="group-card__price">{dep.price}</span>
                  </div>
                  <button className="group-card__btn">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}