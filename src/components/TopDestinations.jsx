import './TopDestinations.css';

const destinations = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop',
    trips: 42,
    tag: 'Beach & Culture',
  },
  {
    id: 2,
    name: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop',
    trips: 31,
    tag: 'Romantic',
  },
  {
    id: 3,
    name: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&auto=format&fit=crop',
    trips: 27,
    tag: 'Adventure',
  },
  {
    id: 4,
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&auto=format&fit=crop',
    trips: 19,
    tag: 'Luxury',
  },
  {
    id: 5,
    name: 'Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&auto=format&fit=crop',
    trips: 24,
    tag: 'Beach & Resort',
  },
  {
    id: 6,
    name: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&auto=format&fit=crop',
    trips: 35,
    tag: 'Luxury & Shopping',
  },
  {
    id: 7,
    name: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&auto=format&fit=crop',
    trips: 18,
    tag: 'City Break',
  },
  {
    id: 8,
    name: 'Machu Picchu, Peru',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&auto=format&fit=crop',
    trips: 15,
    tag: 'Heritage',
  },
];

export default function TopDestinations() {
  return (
    <section className="top-dest">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">Top Destinations</h2>
          <a href="#" className="view-all">View All →</a>
        </div>

        <div className="dest-grid">
          {destinations.map(dest => (
            <div className="dest-card" key={dest.id}>
              <div className="dest-card__img">
                <img src={dest.image} alt={dest.name} loading="lazy" />
                <span className="dest-card__tag">{dest.tag}</span>
              </div>
              <div className="dest-card__body">
                <h3>{dest.name}</h3>
                <p>{dest.trips} trips available</p>
                <button className="dest-card__btn">Explore</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}