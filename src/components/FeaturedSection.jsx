import './FeaturedSections.css';

// Section 1 — Honeymoon Packages — Asymmetric grid (1 big + 3 small)
const honeymoon = [
  {
    id: 1,
    title: 'Bali Honeymoon Escape',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop',
    nights: '5N / 6D',
    price: '₹68,000',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    id: 2,
    title: 'Maldives Romance',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&auto=format&fit=crop',
    nights: '4N / 5D',
    price: '₹1,20,000',
    highlight: false,
  },
  {
    id: 3,
    title: 'Kashmir Paradise',
    image: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?w=600&auto=format&fit=crop',
    nights: '6N / 7D',
    price: '₹55,000',
    highlight: false,
  },
  {
    id: 4,
    title: 'Paris & Switzerland',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop',
    nights: '8N / 9D',
    price: '₹1,80,000',
    highlight: false,
  },
];

// Section 2 — Adventure Tours — Horizontal cards grid (2 columns)
const adventures = [
  {
    id: 1,
    title: 'Himalayan Trek',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop',
    desc: 'Trek through stunning Himalayan trails with experienced guides.',
    nights: '8N / 9D',
    price: '₹32,000',
    tag: 'Trekking',
  },
  {
    id: 2,
    title: 'Spiti Valley Expedition',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&auto=format&fit=crop',
    desc: 'Explore the high altitude cold desert of Spiti Valley.',
    nights: '10N / 11D',
    price: '₹38,000',
    tag: 'Road Trip',
  },
  {
    id: 3,
    title: 'Scuba Diving Andaman',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop',
    desc: 'Discover vibrant coral reefs and exotic marine life.',
    nights: '5N / 6D',
    price: '₹42,000',
    tag: 'Water Sports',
  },
  {
    id: 4,
    title: 'Rajasthan on Camel',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&auto=format&fit=crop',
    desc: 'Experience the golden Thar desert on a camel safari.',
    nights: '4N / 5D',
    price: '₹22,000',
    tag: 'Safari',
  },
  {
    id: 5,
    title: 'Kerala Backwaters',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&auto=format&fit=crop',
    desc: 'Cruise the serene backwaters of Kerala on a houseboat.',
    nights: '3N / 4D',
    price: '₹28,000',
    tag: 'Nature',
  },
  {
    id: 6,
    title: 'Meghalaya Waterfalls',
    image: 'https://images.unsplash.com/photo-1598430772299-8412a84f8f8a?w=600&auto=format&fit=crop',
    desc: 'Explore living root bridges and stunning waterfalls.',
    nights: '5N / 6D',
    price: '₹26,000',
    tag: 'Adventure',
  },
];

export default function FeaturedSections() {
  return (
    <>
      {/* ── Section 1 : Honeymoon Packages ── */}
      <section className="featured honeymoon-section">
        <div className="section-inner">
          <div className="section-header">
            <div>
              <h2 className="section-title">Honeymoon Packages</h2>
              <p className="section-sub">Curated romantic getaways for you & your partner</p>
            </div>
            <a href="#" className="view-all">View All →</a>
          </div>

          <div className="honeymoon-grid">
            {honeymoon.map(item => (
              <div
                className={`honeymoon-card ${item.highlight ? 'honeymoon-card--big' : ''}`}
                key={item.id}
              >
                <div className="hc-img">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  {item.badge && <span className="hc-badge">{item.badge}</span>}
                  <div className="hc-overlay">
                    <div className="hc-info">
                      <h3>{item.title}</h3>
                      <div className="hc-meta">
                        <span>{item.nights}</span>
                        <span className="hc-price">{item.price} <small>/ couple</small></span>
                      </div>
                      <button className="hc-btn">View Package</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2 : Adventure Tours ── */}
      <section className="featured adventure-section">
        <div className="section-inner">
          <div className="section-header">
            <div>
              <h2 className="section-title" style={{ color: '#fff' }}>Adventure Tours</h2>
              <p className="section-sub" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Thrill-packed journeys for the bold explorer
              </p>
            </div>
            <a href="#" className="view-all" style={{ color: '#ffd700' }}>View All →</a>
          </div>

          <div className="adv-grid">
            {adventures.map(adv => (
              <div className="adv-card" key={adv.id}>
                <div className="adv-card__img">
                  <img src={adv.image} alt={adv.title} loading="lazy" />
                  <span className="adv-tag">{adv.tag}</span>
                </div>
                <div className="adv-card__body">
                  <h3>{adv.title}</h3>
                  <p>{adv.desc}</p>
                  <div className="adv-card__footer">
                    <div>
                      <span className="adv-nights">{adv.nights}</span>
                      <span className="adv-price">{adv.price}</span>
                    </div>
                    <button className="adv-btn">Explore</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}