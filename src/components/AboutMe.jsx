import { useEffect } from 'react';
import { useState } from 'react';
import me from '../assets/me.jpg';

// images for playground //
import playground from '../assets/playground.svg';
import hobbies from '../assets/hobbies.webp';
import recs from '../assets/recs.webp';
import sideq from '../assets/sideq.webp';
import figma from '../assets/figma.webp';
import dev from  '../assets/dev.webp';
import claude from '../assets/claude.webp';
import google from '../assets/google.webp';
import adobe from '../assets/adobe.webp';
import fresco from '../assets/fresco.webp';
import r from '../assets/r.webp';

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

  const [showHobbies, setShowHobbies] = useState(false);
  const [showBooks, setShowBooks] = useState(false);
  const [showSideq, setShowSideq] = useState(false);

  const tools = [
  { name: "Figma", img: figma },
  { name: "Claude Code", img: claude },
  { name: "Adobe Suite", img: adobe },
  { name: "R", img: r },
  { name: "Google UX Cert", img: google },
  { name: "Fresco", img: fresco },
  { name: "React / Dev", img: dev },
];

const [carouselOpen, setCarouselOpen] = useState(false);
const [activeIndex, setActiveIndex] = useState(0);
const [hasClickedArcade, setHasClickedArcade] = useState(false);
const [hasClickedArrowRight, setHasClickedArrowRight] = useState(false);

const goNext = () => setActiveIndex((prev) => (prev + 1) % tools.length);
const goPrev = () => setActiveIndex((prev) => (prev - 1 + tools.length) % tools.length);


  return (
    <>
 <section className="case-section-block">
         <section className="case-overview">
         <img src={me} alt="Victoria Chen - About Me" className="case-overview-img" />
         <div className="case-overview-text">
           <h2 className="case-section-heading">Hello World!</h2>
           <p>
           <span className="bold">Where to begin . . .</span> with the kid who wrote and illustrated her first "book" at age 6? The high schooler who couldn't stop doodling comics and digital infographics in every AP class? Or the college freshman who first realized that 
           yes, there existed a career that combined her love of <span className="bold">art, psychology, technology</span>, and <span className="colorchangebold">connecting people's stories.</span>
           </p>
           <p><br></br>There are so many reasons I chose <span className="colorchangebold">product design</span>, but I'll share just a few here :)
           </p>
           <p>
          ✧ <span className="bold">Making things!!</span> I get a one-of-a-kind satisfaction from producing aesthetic, user-friendly projects that make people <span className="colorchangebold">smile.</span>
          </p> 
          <p>
          ✧ <span className="bold">Education!!</span> I'm passionate about optimizing and personalizing learning experiences - and what better way to learn than through <span className="colorchangebold">engaging, interactive digital products</span>?
          </p> 
          <p>
          ✧ <span className="bold">The people!!</span> Volunteering with Develop for Good, participating in Rewriting the Code events, and chatting on the BobaTalks Discord, I've absorbed SO much from the amazing <span className="colorchangebold">tech x design community</span> - and my dream is to one day give back as a mentor!
          </p>
          <p>
          <br></br>As a writer, sometimes we lack the words to describe something. Same with artists and visualizing, psychologists and theorizing, statisticians and model-building. But when individual disciplines aren't enough, tech and design
          are there to <span className="bold">bring things together</span>. That's why I see my varied, interdisciplinary experiences as <span className="colorchangebold">a strength, not a setback</span>, and why I hope to continue developing all these passions in my career.
        </p> 
         </div>
       </section>
       <div className="hero-buttons">
              <a href="https://drive.google.com/file/d/1eju-nxiTRaRhZURQy0B-LE3d0OkLjA3x/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className="hero-button">Check Out My Resumé</button>
              </a>

              <a href="https://www.linkedin.com/in/2028victoria-chen/" target="_blank" rel="noopener noreferrer">
                <button className="hero-button">Let's Connect On LinkedIn!</button>
              </a>
            </div>
        </section>

         <div className="photo-header-row">
          <h2><span className="colorchange">Where Am I Now?</span></h2>
        </div>
            <div className="photo-stats">
            <div className="photo-stat">
              <p className="stat-number">Psych + Stats @ Harvard</p>
              <p className="stat-label">exploring how cognition and statistical learning <br></br>play into user experience</p>
            </div>
            <div className="photo-stat">
              <p className="stat-number">Product Designer</p>
              <p className="stat-label">with rich extracurricular and nonprofit experience, <br></br>Google Grow certified, seeking internships</p>
            </div>
            <div className="photo-stat">
              <p className="stat-number">Illustrator + Graphic Designer</p>
              <p className="stat-label">freelancing on Unsplash and <br></br>through nonprofit work</p>
            </div>
            </div>

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
        <br></br>
      
        <div className="photo-header-row">
          <h2><span className="colorchange">You Made It! Now, the Fun Part!</span></h2>
        </div>
            <div className="photo-stats">
            <div className="photo-stat">
              <p className="stat-number">Hover and click around the interactive illustration below to explore my skills, hobbies, favorite books, and more!</p>
            </div>
            </div>

      <section className="playground-banner">
            <img src={playground} alt="About Me Playground" className="playground-img" />

            <div
  className="hotspot hotspot-arcade"
  onClick={() => {
    setCarouselOpen(true);
    setHasClickedArcade(true);
  }}
>

  {!hasClickedArcade && (
    <div className="click-hint" />
  )}
</div>

{carouselOpen && (
  <div className="arcade-carousel">
    <div className="arcade-slide">
      <img src={tools[activeIndex].img} alt={tools[activeIndex].name} />
    </div>
  </div>
)}

<div
  className="hotspot hotspot-arrow-left"
  onClick={goPrev}
/>

<div
  className="hotspot hotspot-arrow-right"
  onClick={() => {
    goNext();
    setHasClickedArrowRight(true);
  }}
>
  {carouselOpen && !hasClickedArrowRight && (
  <div className="click-hint" />
)}
</div>
      
      <div
      className="hotspot hotspot-hobbies"
      onMouseEnter={() => setShowHobbies(true)}
      onMouseLeave={() => setShowHobbies(false)}
      onClick={() => setShowHobbies((prev) => !prev)}
    >
      <img
        src={hobbies}
        alt="Hobbies"
        className={`hobbies-popup ${showHobbies ? 'visible' : ''}`}
      />
    </div>

     <div
    className="hotspot hotspot-books"
    onMouseEnter={() => setShowBooks(true)}
    onMouseLeave={() => setShowBooks(false)}
    onClick={() => setShowBooks((prev) => !prev)}
  >
    <img
      src={recs}
      alt="Book Recommendations"
      className={`books-popup ${showBooks ? 'visible' : ''}`}
    />
  </div>

  <div
  className="hotspot hotspot-sideq"
  onMouseEnter={() => setShowSideq(true)}
  onMouseLeave={() => setShowSideq(false)}
  onClick={() => setShowSideq((prev) => !prev)}
>
  <img
    src={sideq}
    alt="Sidequest"
    className={`sideq-popup ${showSideq ? 'visible' : ''}`}
  />
</div>
      </section>

      <section className="marquee-section">
        <div className="marquee">
          <div className="marquee__track">
            {["Adobe Suite", "Figma", "React", "Psych Research", "Figjam", "shadcn/ui", "HTML/CSS", "Wireframing", "AI/ML", "Prototyping", "User Research", "Notion", "Flask", "JavaScript", "Python", "SQL"]
              .concat(["Adobe Suite", "Figma", "React", "Psych Research", "Figjam", "shadcn/ui", "HTML/CSS", "Wireframing", "AI/ML", "Prototyping", "User Research", "Notion", "Flask", "JavaScript", "Python", "SQL"])
              .map((skill, i) => <span key={i}>{skill}</span>)}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
