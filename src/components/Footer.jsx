import { Plane, Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col footer__brand">
          <div className="footer__logo">
            <Plane size={20} />
            <span>TripFactory</span>
          </div>
          <p>Your trusted travel partner for unforgettable holidays. We craft journeys, not just trips.</p>
          <div className="footer__contact">
            <span><Phone size={14} /> +91 98765 43210</span>
            <span><Mail size={14} /> hello@tripfactory.in</span>
            <span><MapPin size={14} /> Mumbai, India</span>
          </div>
        </div>

        <div className="footer__col">
          <h4>Destinations</h4>
          <ul>
            <li><a href="#">International</a></li>
            <li><a href="#">Domestic</a></li>
            <li><a href="#">Beach Holidays</a></li>
            <li><a href="#">Hill Stations</a></li>
            <li><a href="#">Adventure</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Support</h4>
          <ul>
            <li><a href="#">My Booking</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cancellation Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 TripFactory. All rights reserved.</p>
        <p>Made with ♥ for travelers</p>
      </div>
    </footer>
  );
}