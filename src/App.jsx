import './App.css'

function App() {

  return (
    <div className="App">
      <header className="hero">
        <nav className="navbar">
          <h1 className="logo">FashionHub</h1>
          <ul className="nav-links">
            <li><a href="#collections">Collections</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="hero-content">
          <h2>Discover Your Style</h2>
          <p>Explore the latest trends in fashion.</p>
          <a href="#collections" className="cta-button">Shop Now</a>
        </div>
      </header>

      <section id="collections" className="collections">
        <h3>Our Collections</h3>
        <div className="collection-list">
          <div className="collection-item">
            <img src="https://images.pexels.com/photos/27045937/pexels-photo-27045937/free-photo-of-young-woman-wearing-floral-clothing-and-eyewear-sitting-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Collection 1" />
            <h4>Spring Collection</h4>
          </div>
          <div className="collection-item">
            <img src="https://wallpapercave.com/wp/wp8960985.jpg" alt="Collection 2" />
            <h4>Summer Collection</h4>
          </div>
          <div className="collection-item">
            <img src="https://wallpapercave.com/wp/wp8960834.jpg" alt="Collection 3" />
            <h4>Autumn Collection</h4>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h3>About Us</h3>
        <p>FashionHub is your go-to destination for the latest in fashion. We offer a curated selection of styles for every season.</p>
      </section>

      <footer id="contact" className="footer">
        <h3>Contact Us</h3>
        <p>Email: contact@fashionhub.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Follow us on social media!</p>
      </footer>
    </div>
  );
}
export default App
