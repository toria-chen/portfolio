import { useEffect } from 'react';
import flowers from '../assets/flowers.GIF';

function Hero() {
  useEffect(() => {
    const moreAbout = document.querySelector('.more-about-me');
    if (!moreAbout) return;

    const observerMore = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observerMore.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observerMore.observe(moreAbout);

    return () => observerMore.disconnect();
  }, []);

  return (
    <section className="hero">
      <div className="hero-inner">
        <img src={flowers} alt="Flowers" className="hero-flower" />

        <header className="intro-box">
          <h1>Victoria Chen</h1>
          <h3>
            ✦ UI/UX, Product, and Graphic Design<br />
            ✦ Psych + Stats @Harvard<br />
            ✦ Google Grow UX Design Certified
          </h3>
        </header>
      </div>

      <section className="more-about-me">
        <div className="wavy-line-container">
          <svg className="wavy-line" viewBox="0 0 1200 50" preserveAspectRatio="none">
            <path
              d="M0 25 Q 25 0 50 25 T 100 25 T 150 25 T 200 25 T 250 25 T 300 25 T 350 25 T 400 25 T 450 25 T 500 25 T 550 25 T 600 25 T 650 25 T 700 25 T 750 25 T 800 25 T 850 25 T 900 25 T 950 25 T 1000 25 T 1050 25 T 1100 25 T 1150 25 T 1200 25"
              fill="transparent"
              stroke="#fce4ec"
              strokeWidth="4"
            />
          </svg>
        </div>

        <div className="down-arrows">
          <span>↓</span>
          <span>↓</span>
          <span>↓</span>
        </div>
      </section>
    </section>
  );
}

export default Hero;
