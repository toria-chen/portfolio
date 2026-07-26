import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import newspages from "../assets/newspages.png";
import east from "../assets/east.jpg";
import west from "../assets/west.jpg";
import central from "../assets/central.jpg";
import quad from "../assets/quad.jpg";
import postcards from "../assets/postcards.png";
import flyby from "../assets/flyby.jpg";
import house26 from "../assets/house26.png";
import quadd from "../assets/quadd.png"
import riverc from "../assets/riverc.png"
import riverw from "../assets/riverw.png"
import rivere from "../assets/rivere.png"
import trading from "../assets/trading.png"
import news from "../assets/news.png"

import cover1 from "../assets/cover1.jpg";
import cover2 from "../assets/cover2.jpg";
import cover3 from "../assets/cover3.jpg";
import cover4 from "../assets/cover4.jpg";
import cover5 from "../assets/cover5.jpg";
import cover6 from "../assets/cover6.jpg";
import cover7 from "../assets/cover7.jpg";
import cover8 from "../assets/cover8.jpg";
import cover9 from "../assets/cover9.jpg";
import cover10 from "../assets/cover10.jpg";
import cover11 from "../assets/cover11.jpg";
import cover12 from "../assets/cover12.jpg";

import title1 from "../assets/title.jpg";
import title2 from "../assets/title2.jpg";
import title3 from "../assets/title3.jpg";
import title4 from "../assets/title4.jpg";
import title5 from "../assets/title5.jpg";
import title6 from "../assets/title6.jpg";
import title7 from "../assets/title7.jpg";
import title8 from "../assets/title8.jpg";
import title9 from "../assets/title9.jpg";
import title10 from "../assets/title10.jpg";
import title11 from "../assets/title11.jpg";
import title12 from "../assets/title12.jpg";

import lev1 from "../assets/lev1.jpg"
import lev2 from "../assets/lev2.jpg"
import lev3 from "../assets/lev3.jpg"
import lev4 from "../assets/lev4.jpg"
import lev5 from "../assets/lev5.jpg"
import lev6 from "../assets/lev6.jpg"

const coverImages = [
  quad, central, east, west,
  cover1, cover3, cover2, cover7,
  cover4, cover6, cover5, cover11,
  cover9, cover10, cover8, cover12,
];

const scrollImages = [
  flyby, house26, quad, central, east, west,
];

const levImages = [
  lev1, lev2, lev3, lev4, lev5, lev6,
];

const titleImages = [
  quadd, riverc, rivere, riverw,
  title5, title4, title7, title10,
  title2, title1, title8, title11,
  title3, title6, title9, title12,
];

function ImageCarousel({ images, intervalMs = 3000 }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <div className="editorial-carousel">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Cover art ${i + 1}`}
          className={`editorial-carousel-img ${i === activeIndex ? 'active' : ''}`}
        />
      ))}

      <div className="carousel-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`carousel-dot ${i === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

function CoverBentoGrid() {
  return (
    <div className="cover-bento-grid">
      {coverImages.map((img, i) => (
        <div className="cover-bento-tile" key={i}>
          <img src={img} alt={`Housing Day cover art ${i + 1}`} />
        </div>
      ))}
    </div>
  );
}

function TitleBentoGrid() {
  return (
    <div className="cover-bento-grid">
      {titleImages.map((img, i) => (
        <div className="cover-bento-tile" key={i}>
          <img src={img} alt={`Housing Day cover art ${i + 1}`} />
        </div>
      ))}
    </div>
  );
}

function HousingDay() {
  return (
    <section className="case-study">
      <div className="editorial-header">
  <p className="case-label">THE HARVARD CRIMSON: HOUSING DAY SPECIAL ISSUE</p>
  <h1 className="editorial-title">Back-to-back: Designing the '25 and '26 Housing Market Issues</h1>

  <div className="editorial-byline">
    <span>Victoria Chen  ✧  Design Chair, The Harvard Crimson</span>
  </div>

  <section className="editorial-marquee">
  <div className="editorial-marquee-track">
    {scrollImages.map((img, i) => (
      <img key={i} src={img} alt={`Housing Day cover art ${i + 1}`} />
    ))}
    {scrollImages.map((img, i) => (
      <img key={i + scrollImages.length} src={img} alt={`Housing Day cover art ${i + 1}`} />
    ))}
  </div>
</section>
</div>

<section className="case-overview">
        <ImageCarousel images={levImages} />

        <div className="case-overview-text">
          <h2 className="case-section-heading">So . . . What is Housing Day?</h2>
          <p>
            Welcome to Hogwarts - I mean, Harvard! <span className="colorchangebold">Housing Day</span> is one of our <span className="bold">long-standing traditions</span>, in which first-years get "sorted" into one of <span className="bold">12 residential houses</span>, that they will live in for the next 3 years. I like to compare it with the Sorting Hat in Harry Potter,
            because each house really does have its own personality - mascots, colors, and of course, a TON of house pride (<span className="colorchangebold">LEVERETT HOUSE BEST HOUSE!!</span>).
          </p>
          <p><br></br>But of course, as the Harvard Crimson's <span className="bold">Design Chair</span> and <span className="colorchangebold">Housing Market illustrator</span> for 2025 and 2026, I have to be fair - journalistic integrity matters, after all. So here, I'm sharing with you my process of illustrating 60+ graphics over 
          the past 2 years, to preserve this awesome tradition.</p>
        </div>
      </section>

      {/* PROCESS TRACKER */}
      <section className="case-process">
        <h2 className="case-section-heading">Flyby's Annual Housing Market</h2>
          <p><span className="colorchangebold">Housing Market</span> is a series of articles written by our student blog (Flyby), published online and in print (<span className="bold">each first-year gets a copy!</span>) each year for Housing Day. Each house is assigned to a first-year blogger, who will then interview student leaders, staff, and more
            to produce a scoop on what it's like to live in that house (I wrote the piece for <a href="https://www.thecrimson.com/flyby/article/2025/3/13/harvard-quincy-housing-market-2025/" target="_blank" rel="noopener noreferrer"> Quincy House</a> my freshman year!). 
            As both Design Chair and a Flyby blogger, I've had the honor of <span className="bold">connecting the two boards</span> through the Housing Market illustration process, and I can confidently say this is my <span className="bold">favorite Crimson project</span>.
            <div className="photo-stats">
            <div className="photo-stat">
              <p className="stat-number">60+ Graphics</p>
              <p className="stat-label">digitally designed using Adobe Fresco</p>
            </div>
            <div className="photo-stat">
              <p className="stat-number">12 Houses, 4 Neighborhoods</p>
              <p className="stat-label">each with a unique spirit and identity</p>
            </div>
            <div className="photo-stat">
              <p className="stat-number">5000+ Print Copies</p>
              <p className="stat-label">distributed to first-year students</p>
            </div>
            </div>
          </p>
          <div className="photo-header-row">
        </div>
      </section>

      {/* RESEARCH & AFFINITY MAPPING */}
      <section className="case-section-block">
        <section className="case-overview">
        <img src={house26} alt="Housing Day 2026 Cover" className="case-overview-img" />
        <div className="case-overview-text">
          <h2 className="case-section-heading">Housing Day 2026</h2>
          <p>
          Although I don't consider my artwork to be themed, I was heavily inspired by <span className="bold">art deco and a travel postcard aesthetic</span> for the 2026 Housing Day covers.
          </p>
          <p><br></br>With Harvard's houses having such <span className="colorchangebold">varied and iconic architecture styles</span> spanning several eras, I felt that leaning into that style would 
          differentiate the 2026 artwork from previous years. Additionally, using <span className="bold">reference pictures from old Crimson articles</span> felt like a nice tribute to the paper's legacy!
          </p>
        </div>
      </section>
            <CoverBentoGrid />
      </section>

      {/* PROTOTYPING */}
      <section className="case-section-block">
        <h2 className="case-section-heading">2026 Publication Designs</h2>
        <img src={newspages} alt="Newspaper Examples" className="case-block-img" />
        <img src={postcards} alt="Postcards" className="case-block-img" />
        <p>
         Compiling any special issue is always a <span className="colorchangebold">collaborative labor of love</span>, but Housing Market was particularly so, featuring photography from our Multimedia board, writing from Flyby bloggers, layouts from the Design board, and my illustrations. 
         A new feature that was introduced for this year's issue was the postcards shown above, which were included in every print paper to be <span className="bold">cut out, scrapbooked, or used as dorm decoration</span> for newly sorted freshmen.
        </p>
        <div className="hero-buttons">
              <a href="https://www.thecrimson.com/flyby/article/2026/3/23/harvard-housing-market-announcement-2026/" target="_blank" rel="noopener noreferrer">
                <button className="hero-button">View The Full Article Series</button>
              </a>
              </div>
      </section>

      <section className="case-section-block">
        <section className="case-overview">
        <img src={flyby} alt="Housing Day 2025 Cover" className="case-overview-img" />
        <div className="case-overview-text">
          <h2 className="case-section-heading">Housing Day 2025</h2>
          <p>
          Inspired by previous years' Housing Market publications, I knew I wanted to incorporate a variety of <span className="bold">house iconography and visuals</span> into my artwork. I opted for a 
          bold letterface and surrounded the titles with each house's <span className="colorchangebold">mascot, crest, and neighborhood</span> (Quad, River West, River Central, or River East). I tied the effect together with gold metallic accents and geometric patterns.
          </p>
          <p> <br></br>
          For the neighborhood graphics, I combined a photoillustration from Adobe Illustrator with the <span className="bold">house crests in their relative locations</span>.
          </p>
        </div>
      </section>
      <TitleBentoGrid />
    </section>

    <section className="case-section-block">
        <h2 className="case-section-heading">2025 Publication Designs</h2>
        <img src={news} alt="Newspaper Examples" className="case-block-img" />
        <img src={trading} alt="Trading Cards" className="case-block-img" />
        <p>
         As both a writer and designer for this paper (and a rising sophomore going through the Housing Day process myself), I had so much fun generating ideas for making the paper <span className="colorchangebold">at once informational, fun, and visually engaging</span>. 
         Moving into an upperclassmen house is one of the <span className="bold">biggest student</span> milestones, and Flyby's annual issue is actually one of the first ways students learn about their future home. 
         So along with the articles, we decided to add special, <span className="bold">house-specific "trading cards,"</span> (see above), which provided a quick overview of each house's population, fun facts, places to visit, and more! 
        </p>
        <div className="hero-buttons">
              <a href="https://www.thecrimson.com/topic/harvard-housing-market-2025/" target="_blank" rel="noopener noreferrer">
                <button className="hero-button">View The Full Article Series</button>
              </a>
              </div>
      </section>
      <div className="case-back-link">
        <Link to="/design" className="project-cta">← Back to visual designs</Link>
      </div>
    </section>
    
  );
}

export default HousingDay;