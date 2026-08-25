import { useEffect, useState, useRef } from 'react';
import one from '../assets/1.webp';
import two from '../assets/2.webp';
import three from '../assets/3.webp';
import four from '../assets/4.webp';
import headshot from '../assets/headshot.webp';
import { Link } from 'react-router-dom';
import busyb from "../assets/busyb.jpeg";
import classbandit from "../assets/classbandit.png";
import rf from "../assets/rf.png";

function ProjectsBento() {
  const projects = [
  {
    img: rf,
    name: "Rainforest Connection",
    designType: "End-to-End Mobile App",
    industry: "Envirotech",
    description: "An app redesign for a biodiversity nonprofit, centered on an extensive rainforest sound library.",
    link: "/rfcx",
    size: "large",
  },
  {
    img: classbandit,
    name: "ClassBandit",
    designType: "Illustration + Branding",
    industry: "EdTech",
    description: "A digital class pet tool helping K-6 educators to build community through social-emotional learning.",
    link: "/bandit",
    size: "medium",
  },
  {
    img: busyb,
    name: "busy.b",
    designType: "Full-Stack Build",
    industry: "Productivity",
    description: "A plant-themed microproductivity tracker, built using Python, HTML/CSS, and SQLite3.",
    link: "https://github.com/toria-chen/busy.b/blob/main/README.md",
    external: true,
    size: "flat",
  },
];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bento-grid">
      {projects.map((project, i) => {
        const TileWrapper = project.external ? 'a' : Link;
        const linkProps = project.external
          ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
          : { to: project.link };

        return (
          <TileWrapper
            key={i}
            {...linkProps}
            className={`bento-tile bento-${project.size} ${hoveredIndex === i ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="bento-tile-inner">
  <div className="bento-img-wrap">
    <img src={project.img} alt={project.name} className="bento-img" />
    <div className="bento-overlay">
      <p className="bento-description">{project.description}</p>
      <span className="bento-readmore">Read more →</span>
    </div>
  </div>

  <div className="bento-info-bar">
  <span className="bento-name-text">{project.name}</span>
  <div className="bento-badges">
    <span className="bento-badge">{project.designType}</span>
    <span className="bento-badge">{project.industry}</span>
  </div>
</div>
</div>
          </TileWrapper>
        );
      })}
    </div>
  );
}

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
    <>
      <section className="hero">
        <div className="hero-cards-row">

          {/* LEFT CARD — info */}
          <div className="hero-card info-card">
            <div className="headshot-row">
              <img src={headshot} alt="Victoria Chen" className="headshot" />
              <div className="headshot-credentials">
                <p className="name-line"><span className="squiggle">Victoria Chen</span></p>
                <p className="credentials-line">Product Design ✧ Harvard '28</p>
                <div className="status-pill">
                <span className="status-dot"></span>
                Seeking Summer '27 Internships!
                </div>
              </div>
            </div>

            <h2>
              Hi! I'm a <span className="colorchangebold">psychology-driven designer</span> rewriting stories into whimsical experiences that keep people <span className="new">coming back for more</span>.
            </h2>

            <div className="hero-buttons">
              <a href="https://drive.google.com/file/d/1eju-nxiTRaRhZURQy0B-LE3d0OkLjA3x/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className="hero-button">Resumé</button>
              </a>

              <a href="https://www.linkedin.com/in/2028victoria-chen/" target="_blank" rel="noopener noreferrer">
                <button className="hero-button">LinkedIn</button>
              </a>
            </div>

            <div className="hero-plants">
              <img src={one} alt="Plant stage 1" />
              <img src={two} alt="Plant stage 2" />
              <img src={three} alt="Plant stage 3" />
              <img src={four} alt="Plant stage 4" />
            </div>
          </div>

          {/* projects */}
          <div className="hero-card projects-card">
            <ProjectsBento />
            <Link to="/casestudies" className="see-all-link-top">Explore all case studies →</Link>
          </div>

          </div>
      </section>

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
      </section>
    </>
  );
}

export default Hero;