import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-image-wrapper">
        <Image
          src="/front-view.webp"
          alt="Karur Annapoorna Front View"
          fill
          priority
          className="hero-image"
        />
      </div>

      <div className="container hero-content">
        <span className="fade-up veg-badge">100% Pure Vegetarian</span>
        <h1 className="fade-up">Your Choice, <br /><span>Our Taste.</span></h1>
        <p className="fade-up" style={{ animationDelay: '0.2s' }}>
          Experience the finest blend of traditional Indian culinary flavors
          and modern culinary excellence. From our kitchen to your heart.
        </p>
        <div className="hero-btns fade-up" style={{ animationDelay: '0.4s' }}>
          <a href="#featured" className="btn btn-primary">Our Specialties</a>
        </div>
      </div>

      <div className="scroll-indicator fade-up" style={{ animationDelay: '1s' }}>
        <div className="mouse"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
