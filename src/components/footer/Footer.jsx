import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-box-container">
        <div className="footer-box">
          <a href="#" className="logo">
            <i className="fas fa-paper-plane"></i>
            Travel
          </a>
          <p >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
            nulla.
          </p>
          <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
        </div>
        <div className="footer-box">
          <h3>Quick Links</h3>
          <a href="#home" className="footer-links">
            <i className="fas fa-arrow-right"></i>
            Home
          </a>
          <a href="#about" className="footer-links">
            <i className="fas fa-arrow-right"></i>
            About
          </a>
          <a href="#destination" className="footer-links">
            <i className="fas fa-arrow-right"></i>
            Destination
          </a>
          <a href="#services" className="footer-links">
            <i className="fas fa-arrow-right"></i>
            Services
          </a>
          <a href="#gallery" className="footer-links">
            <i className="fas fa-arrow-right"></i>
            Gallery
          </a>
          <a href="#blogs" className="footer-links">
            <i className="fas fa-arrow-right"></i>
            Blogs
          </a>
        </div>
        <div className="footer-box">
          <h3>Contact Info</h3>
          <p className="contact-info">
            <i className="fas fa-map"></i>Mumbai, India
          </p>
          <p className="contact-info">
            <i className="fas fa-phone"></i>+123-456-789
          </p>
          <p className="contact-info">
            <i className="fas fa-envelope"></i>contact@info.com
          </p>
          <p className="contact-info">
            <i className="fas fa-clock"></i>7:00am - 10:00pm
          </p>
        </div>
        <div className="footer-box">
          <h3>Newsletter</h3>
          <p>Subscribe for latest updates</p>
          <form className="newsletter-from">
            <input
              type="email"
              className="footer-input"
              placeholder="enter your email"
            />
            <input type="submit" value="Subscribe" className="book-btn" />
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
