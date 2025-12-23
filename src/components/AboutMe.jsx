import { useEffect } from 'react';
import { useState } from 'react';
import me from '../assets/me.jpg';
import research from '../assets/research.png';
import graphic from '../assets/graphic.png';
import ux from '../assets/ux.png';
import web from '../assets/web.png';
import story from '../assets/story.png';

function About() {

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
        <div className="hero-inner">
          <img src={me} alt="Victoria Chen" className="about-me" />

          <header className="intro-box">
            <br />
            <h2>Hello! I'm a <span className="highlight">self-taught designer</span> bringing ideas to life through my <span className="colorchange">storytelling and artistic passions.</span></h2>
            <h3>With my psychology research background, creative mindset, and rapid prototyping skills, I specialize in business-to-consumer design.</h3>
            <br />
            <h3><span className="highlight">Experiences:</span></h3>
            <h3>✦ UX Designer | Tech 4 Social Good | 09/25-Present<br />
              ✦ Media Intern | LabXChange | 02/25-Present<br />
              ✦ Design Executive | The Harvard Crimson | 01/25-Present
            </h3>
            <br />
            <a href="https://drive.google.com/file/d/1id5j06gmS0d87BAapWN5OoKD3RfbujHj/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button className="about-button">Resume</button>
            </a> 

            <a href="https://www.linkedin.com/in/2028victoria-chen/" target="_blank" rel="noopener noreferrer">
              <button className="about-button">LinkedIn</button>
            </a> 
          </header>
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

        <div className="down-arrows">
          <span>↓</span>
          <span>↓</span>
          <span>↓</span>
        </div>
      </section>

      <section className="toolkit">
        <h2><span className="colorchange">What's in my Toolkit?</span></h2>
        <div className="toolkit-images">
          <div className="toolkit-item">
            <img src={research} alt="Research Tool" />
            <p>Psych + AI Research</p>
          </div>

          <div className="toolkit-item">
            <img src={ux} alt="UX Tool" />
            <p>UX Design</p>
          </div>

          <div className="toolkit-item">
            <img src={graphic} alt="Graphic Tool" />
            <p>Graphics + Illustrations</p>
          </div>

          <div className="toolkit-item">
            <img src={web} alt="Web Tool" />
            <p>Web Development</p>
          </div>

          <div className="toolkit-item">
            <img src={story} alt="Story Tool" />
            <p>Branding + Storytelling</p>
          </div>
        </div>
      </section>

      <section className="marquee-section">
        <div className="marquee">
          <div className="marquee__track">
            {["Adobe Suite", "Figma", "React", "Psych Research", "Procreate", "HTML/CSS", "Wireframing", "AI/ML", "Prototyping", "User Research", "Notion", "Flask", "JavaScript", "Python", "SQL"]
              .concat(["Adobe Suite", "Figma", "React", "Psych Research", "Procreate", "HTML/CSS", "Wireframing", "AI/ML", "Prototyping", "User Research", "Notion", "Flask", "JavaScript", "Python", "SQL"])
              .map((skill, i) => <span key={i}>{skill}</span>)}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
