import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import one from '../assets/1.webp';
import two from '../assets/2.webp';
import three from '../assets/3.webp';
import four from '../assets/4.webp';
import cases from "../assets/case studies.webp"
import visuals from "../assets/visuals.webp"

import stats from "../assets/stats.webp"
import psych from "../assets/psych.webp"
import socialgood from "../assets/socialgood.webp"
import arts from "../assets/arts.webp"
import words from "../assets/words.webp"
import plain from "../assets/plain.webp"

const skillColumns = [
  {
    img: one,
    label: "Ideation",
    description: "Imagination is my superpower, combining my psychology research experience with a love for understanding people's stories."
  },
  {
    img: two,
    label: "Storytelling",
    description: "Writing for The Harvard Crimson (+ loads of fanfiction!) has led me to treat design as an immersive conversation between user and platform."
  },
  {
    img: three,
    label: "Prototyping",
    description: "I'm (in)famous for executing full Figma prototypes in hours — speed that comes not from cutting corners, but from genuine passion for my work."
  },
  {
    img: four,
    label: "Visualization",
    description: "My love of illustration means art isn't just a finishing touch, but part of the design process itself (all artwork on this site is self-drawn!)."
  },
];

const hats = [
  { 
  id: "art", 
  label: "~Artiste~", 
  article: "an", 
  img: arts, 
  color: "#bb8de4", 
  description: "For me, every brainstorm session starts with scratch paper and iPad doodles. From there, I bring my clients’ stories to life, transforming their missions into hand-drawn visuals, custom animations, and storybook-esque experiences.",
},
  { 
  id: "stats", 
  label: "Stats Wizard", 
  article: "a", 
  img: stats, 
  color: "#9098ff", 
  description: "My design instincts—from visual hierarchy to A/B test analysis—are backed by probabilistic reasoning. After all, design, like everything else, can always use some Bayesian updating!",
  spells: "LaTeX, R Studio, Python"
},
{ 
  id: "psych", 
  label: "Psych Puzzler", 
  article: "a", 
  img: psych, 
  color: "#e589bf", 
  description: "As a developmental psych researcher, I've designed child-friendly, gamified studies and worked to introduce our science to underserved communities across Boston, shaping my passion for accessibility and educational visuals in my own designs."
},
{ 
  id: "word", 
  label: "Wordsmith", 
  article: "a", 
  img: words, 
  color: "#d2a622", 
  description: "I’m a student blogger and an award-winning flash fiction writer, but my storytelling experience doesn’t stop at the page. I bring that blend of empathy and communication to every webpage and app I design, aiming for something immersive and un-put-downable."
},
{ 
  id: "socialgood", 
  label: "Community Creative", 
  article: "a", 
  img: socialgood, 
  color: "#f59d5a", 
  description: "I owe where I am to the mentorship and friendship I’ve found across tech x design communities, and I pay that forward wherever I can: as an Adobe Campus Ambassador, UX Design Lead at Tech For Social Good, or in whatever comes next."
},
];

function useTypewriter(text, speed = 50) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText('');
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayedText(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayedText;
}

function Projects() {
  const [activeHat, setActiveHat] = useState(hats[0].id);
  const [displayed, setDisplayed] = useState(hats[0]);
  const [visible, setVisible] = useState(true);

  const selected = hats.find((h) => h.id === activeHat);
  const typedLabel = useTypewriter(displayed.label, 48);
  const safeTypedLabel = displayed.label.startsWith(typedLabel) ? typedLabel : '';

  useEffect(() => {
    hats.forEach((hat) => {
      const img = new Image();
      img.src = hat.img;
    });
  }, []);

  useEffect(() => {
    if (activeHat === displayed.id) {
      setVisible(true);
      return;
    }
    setVisible(false);
  }, [activeHat]);

  const handleFadeOutEnd = (e) => {
    if (e.propertyName !== 'opacity' || visible) return;
    if (activeHat !== displayed.id) {
      setDisplayed(selected);
      setVisible(true);
    }
  };

  return (
    <>
      <section className="hats-section">
        <h2><span className="colorchangebold">I'm a designer who wears lots of hats . . .</span></h2>

        <div className="hats-tab-row">
          {hats.map((hat) => (
            <button
              key={hat.id}
              className={`hat-tab-button ${activeHat === hat.id ? "active" : ""}`}
              style={{
                "--hat-color": hat.color,
                ...(activeHat === hat.id ? { borderColor: hat.color, color: hat.color } : {}),
              }}
              onClick={() => setActiveHat(hat.id)}
            >
              {hat.label}
            </button>
          ))}
        </div>

        <div className="hats-display">
          <div className="hats-character-wrap">
            <img src={plain} alt="Victoria illustrated character" className="hats-character-base" />
            <img
              src={displayed.img}
              alt={displayed.label}
              className="hats-character-hat"
              style={{
                marginTop: displayed.offsetY ?? 0,
                opacity: visible ? 1 : 0,
              }}
              onTransitionEnd={handleFadeOutEnd}
            />
          </div>

          <div
            className="hats-description-box"
            style={{
              borderColor: displayed.color,
              opacity: visible ? 1 : 0,
            }}
            onTransitionEnd={handleFadeOutEnd}
          >
            <p className="hats-description-label typewriter" style={{ color: displayed.color }}>
  <span className="hats-im-a">I'm {displayed.article}</span>{' '}
  {safeTypedLabel}
  <span className="typewriter-cursor" style={{ color: displayed.color }}>|</span>
</p>
            <p className="hats-description-text">{displayed.description}</p>
{displayed.spells && (
  <p className="hats-description-spells">
    <span className="bold">Favorite Spells:</span> {displayed.spells}
  </p>
)}
          </div>
        </div>
      </section>
       <div className="down-arrows">
          <span>↓</span>
          <span>↓</span>
          <span>↓</span>
        </div>
  
      <section className="skills-section">
        <h2><span className="colorchangebold">And here's how it all comes together:</span></h2>

        <section className="skills-table">
          {skillColumns.map((col, i) => (
            <div className="skills-table-col" key={i}>
              <img src={col.img} alt={col.label} className="skills-table-img" />
              <p className="skills-table-label">{col.label}</p>
              <p className="skills-table-description">{col.description}</p>
            </div>
          ))}
        </section>
         <div className="down-arrows">
          <span>↓</span>
          <span>↓</span>
          <span>↓</span>
        </div>

        <div className="process-cta-stack">
          <h2><span className="colorchangebold">Explore what I've been creating!</span></h2>
  <div className="cta-row">
    <img src={cases} alt="Case studies preview" className="cta-collage-img" />
    <Link to="/casestudies">
      <button className="hero-button">Check out my case studies!</button>
    </Link>
  </div>

  <div className="cta-row cta-row-reverse">
    <Link to="/design">
      <button className="hero-button">Explore my visual designs!</button>
    </Link>
    <img src={visuals} alt="Visual design preview" className="cta-collage-img" />
  </div>
</div>

      <section className="marquee-section">
        <div className="marquee">
          <div className="marquee__track">
            {["Adobe Suite", "Figma", "React", "Psych Research", "Figjam", "shadcn/ui", "HTML/CSS", "Wireframing", "AI/ML", "Prototyping", "User Research", "Notion", "Flask", "JavaScript", "Python", "SQL"]
              .concat(["Adobe Suite", "Figma", "React", "Psych Research", "Figjam", "shadcn/ui", "HTML/CSS", "Wireframing", "AI/ML", "Prototyping", "User Research", "Notion", "Flask", "JavaScript", "Python", "SQL"])
              .map((skill, i) => <span key={i}>{skill}</span>)}
          </div>
        </div>
      </section>
      </section>
    </>
  );
}

export default Projects;