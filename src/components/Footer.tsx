import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-content">
        <div className="footer-top">
          <Image 
            src="/logo_white.png" 
            alt="Karur Annapoorna" 
            width={180} 
            height={50} 
            className="footer-logo"
          />
          <p className="footer-tagline">Bringing the authentic taste of 100% Pure Vegetarian South Indian culinary excellence to your table.</p>
          
          <div className="social-links-centered">
            <a href="https://www.facebook.com/karurannapoorna" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://www.instagram.com/karurannapoorna" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-grid-simple">
          <div className="footer-col">
            <h3>Visit Us</h3>
            <p>
              Salem-Bypass NH, Semmadai,<br/>
              RTO Office Road, Manmangalam,<br/>
              Karur - 639006
            </p>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <p className="phone">
              <a href="tel:+917871341991">78713 41991</a>
            </p>
            <p className="timings">Open Daily: 7:00 AM - 10:30 PM</p>
          </div>

          <div className="footer-col">
            <h3>Navigation</h3>
            <div className="footer-actions-simple">
              <a href="/menu">View Full Menu</a>
              <a href="https://maps.app.goo.gl/LoJtggDBMw1FxMNH8" target="_blank" rel="noopener noreferrer">Get Directions</a>
              <a href="https://g.page/r/CTsgEPJIrGaAEBM/review" target="_blank" rel="noopener noreferrer">Review Us</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Karur Annapoorna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
