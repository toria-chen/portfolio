import { createBrowserRouter, Link } from 'react-router-dom';
import { useState } from 'react';
import planey from "../assets/planey.png"

import bw from "../assets/bw.PNG";
import dash from "../assets/dash.PNG";
import dog from "../assets/dog.PNG";
import donut from "../assets/donut.PNG";
import fall from "../assets/fall.PNG";
import flyby from "../assets/flyby.jpg";
import friendship from "../assets/friendship.PNG";
import hy from "../assets/hy.PNG";
import polyamory from "../assets/polyamory.PNG";
import selfie from "../assets/selfie.jpg";
import songs from "../assets/songs.PNG";
import greek from "../assets/greek.png"
import train from "../assets/train.png"
import mailbox from "../assets/mailbox.png"
import mario from "../assets/mario.png"
import pov from "../assets/pov.png"
import scroll from "../assets/scroll.png"
import hands from "../assets/hands.png"
import datamatch from "../assets/datamatch.png"
import aaup from "../assets/aaup.png"
import leader from "../assets/leader.png"
import snow from "../assets/snow.png"
import ai from "../assets/ai.png"
import linked from "../assets/linked.png"
import thirty from "../assets/30.png"
import hold from "../assets/hold.png"
import wgs from "../assets/wgs.png"
import howto from "../assets/howto.png"
import cabgarden from "../assets/cabgarden.png"
import crim from "../assets/crim.jpg"

import fm from "../assets/fm.jpg";
import ecocacao from "../assets/ecocacao.jpg";
import lds from "../assets/lds.jpg";
import lev from "../assets/lev.jpg";
import grabbit from "../assets/grabbit.PNG";
import ignited from "../assets/ignited.jpg";
import openbio from "../assets/openbio.PNG";
import bandit from "../assets/bandit.jpg";
import dhep from "../assets/dhep.jpg";
import evante from "../assets/evante.png"
import seren from "../assets/seren.png"
import hsurv from "../assets/hsurv.png"
import thomas from "../assets/thomas.png"

import koi from "../assets/koi.png";
import lotv from "../assets/lotv.png"
import stickers from "../assets/stickers.jpeg"
import mushrooms from "../assets/mushrooms.png"
import jelly from "../assets/jelly.png"
import heads from "../assets/heads.jpeg"
import headrow from "../assets/headrow.png"
import headrow2 from "../assets/headrow2.png"
import headshots from "../assets/headshots.png"
import dragon from "../assets/dragon.png"
import boba from "../assets/boba.png"
import macaw from "../assets/macaw.png"
import frog from "../assets/frog.png"

import leaves from "../assets/leaves.png"
import food from "../assets/food.png"
import mail from "../assets/mail.png"
import rails from "../assets/rails.png"
import gold from "../assets/gold.png"
import yellow from "../assets/yellow.png"
import plane from "../assets/plane.png"
import flower from "../assets/flower.png"
import droplet from "../assets/droplet.png"
import mfa from "../assets/mfa.png"
import berg from "../assets/berg.png"
import waterfall from "../assets/waterfall.png"
import fence from "../assets/fence.png"
import art from "../assets/art.png"

import labx from "../assets/labx.png"
import neuro from "../assets/neuro.png"
import apes from "../assets/apes.png"
import mbb from "../assets/mbb.png"
import linear from "../assets/linear.png"
import stats from "../assets/stat.png"
import gov from "../assets/gov.png"
import econ from "../assets/econ.png"
import chem from "../assets/chem.png"

const images = [cabgarden, dog, mailbox, songs, dash, hold, leader, bw, wgs, ai, aaup, greek, donut, fall, hands, datamatch, flyby, polyamory, linked, scroll, selfie, thirty, friendship, hy, pov, train, snow, howto, mario];
const projects2 = [
  {
    img: dhep,
    name: "Deaf Health Equity Project",
    description: "Designed a logo, color palette, and branding materials for a nonprofit educating families and pediatric medical staff on deafness and patient support.",
  },
  {
    img: openbio,
    name: "Harvard OpenBio",
    description: "Refined existing branding materials for Harvard’s largest biology and biotech student organization, including visuals for their annual summer research institute.",
  },
  {
    img: fm,
    name: "Fifteen Minutes Magazine",
    description: "Created an artistic, vintage-inspired brandmark for the Harvard Crimson’s magazine, featuring in 2-3 print issues a semester.",
  },
  {
    img: thomas,
    name: "Thomas Lab Sticker Design",
    description: "Created sticker designs that represent our lab’s playful, child-friendly, and welcoming culture, voted on by 30+ lab members.",
  },
  {
    img: evante,
    name: "Ecovante",
    description: "Created branding assets and a brand-new logo for a company connecting ecotourism travelers with sustainability nonprofits.",
  },
  {
    img: lds,
    name: "Harvard Laboratory for Developmental Studies",
    description: "Inspired by the original crest, designed a character-centric visual asset of the lab’s long-standing lizard mascots.",
  },
  {
    img: lev,
    name: "Leverett Housing Day Merch",
    description: "Voted as the winning T-shirt artwork for our residential house, my design was produced for 500 students to wear during Housing Day (like our version of the Sorting Ceremony in Harry Potter!).",
  },
  {
    img: grabbit,
    name: "Grabbit",
    description: "Redesigned a character logo and brand identity for a start-up providing quick student-to-student food delivery around college campuses.",
  },
  {
    img: seren,
    name: "Summoned Cover Design",
    description: "Created cover artwork and a world map for my personal in-progress fantasy novel, Summoned.",
  },
  {
    img: hsurv,
    name: "Harvard Summer Research Village Abstract Book",
    description: "Designed cover and chapter artwork for a research book of ~400 student abstracts across 14 cross-disciplinary programs.",
  },
  {
    img: ignited,
    name: "IgnitEd",
    description: "Led branding identity and logo/character design for a start-up tutoring initiative supporting low-income secondary school students in Hawaii and California.",
  },
  {
    img: bandit,
    name: "ClassBandit",
    description: "Full character design and animation for a K-6-targeted digital class pet tool balancing social-emotional learning and playful collaboration.",
  },
  {
    img: ecocacao,
    name: "Ecocacao",
    description: "Spearheaded character/logo design for a fictional eco-friendly chocolate brand, winning first prize at the Harvard Marketing Bootcamp’s Case Study competition.",
  },
] 
const images3 = [headrow, koi, stickers, jelly, lotv, dragon, headshots, macaw, boba, mushrooms, heads, frog, headrow2]
const images4 = [waterfall, mfa, art, plane, flower, droplet, food, berg, fence, mail, yellow, rails, gold, leaves]
const images5 = [linear, gov, stats, mbb, chem, neuro, apes, econ]

function IllustrationGrid({ images }) {
  return (    
    <div className="illustration-grid">
      {images.map((img, i) => (
        <div className="illustration-tile" key={i}>
          <img src={img} alt={`Illustration ${i + 1}`} />
        </div>
      ))}
    </div>
  );
}

function IllustrationGrid2({ images }) {
  return (    
    <div className="illustration-grid2">
      {images.map((img, i) => (
        <div className="illustration-tile" key={i}>
          <img src={img} alt={`Illustration ${i + 1}`} />
        </div>
      ))}
    </div>
  );
}

function BrandingGrid({ projects }) {
  return (
    <div className="branding-grid">
      {projects.map((project, i) => (
        <div className="branding-tile" key={i}>
          <div className="branding-tile-inner">
            <img src={project.img} alt={project.name} className="branding-img" />
            <div className="branding-overlay">
              <p className="branding-name">{project.name}</p>
              <p className="branding-description">{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Designs() {
  const [activeTab, setActiveTab] = useState('crimson');

  return (
    <>
    <section className="designs">
      <div className="projects-header">
          <h1>Designs</h1>
          <div className="plane-wrap">
  <svg className="plane-trail" viewBox="0 0 900 80" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M0 40 Q 100 10 200 40 T 400 40 T 600 40 T 800 40 T 900 30"
    fill="transparent"
    stroke="#d47291"
    strokeWidth="6"
    strokeDasharray="2 24"
    strokeLinecap="round"
  />
</svg>
  <img src={planey} alt="" className="plane-figure" />
</div>
          <p className="projects-subtitle">Explore my illustrations, graphic journalism, branding, and more!</p>
      </div>

      <div className="design-tabs">
        <button
          className={`design-tab ${activeTab === 'crimson' ? 'active' : ''}`}
          onClick={() => setActiveTab('crimson')}
        >
          ✧ The Harvard Crimson ✧
        </button>
        <button
          className={`design-tab ${activeTab === 'branding' ? 'active' : ''}`}
          onClick={() => setActiveTab('branding')}
        >
          ✧ Branding ✧
        </button>
        <button
          className={`design-tab ${activeTab === 'illustration' ? 'active' : ''}`}
          onClick={() => setActiveTab('illustration')}
        >
          ✧ Illustration ✧
        </button>
        <button
          className={`design-tab ${activeTab === 'photography' ? 'active' : ''}`}
          onClick={() => setActiveTab('photography')}
        >
          ✧ Photography ✧
        </button>
        <button
          className={`design-tab ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          ✧ Educational Materials ✧
        </button>
      </div>

      {activeTab === 'crimson' && (
        <>
          <div className="photo-header-row">
          <h2><span className="colorchange">The Harvard Crimson</span></h2>
            <a href="https://www.thecrimson.com/writer/1220515/Victoria__Chen/" target="_blank" rel="noopener noreferrer">
              <button className="hero-button">View my Full Portfolio</button>
            </a>
        </div>
          <div className="photo-stats">
            <div className="photo-stat">
              <p className="stat-number">2 Million Viewers</p>
              <p className="stat-label">online, per month</p>
            </div>
            <div className="photo-stat">
              <p className="stat-number">Design Board Chair</p>
              <p className="stat-label">leading 20+ graphic, layout, and UX designers</p>
            </div>
            <div className="photo-stat">
              <p className="stat-number">300+ Graphics</p>
              <p className="stat-label">self-drawn or photoillustrated</p>
            </div>
          </div>

          <div className="spotlight-card">
            <div className="spotlight-text">
              <p className="spotlight-label">FEATURED: DESIGN CHAIR EXPERIENCE ~ JAN. 2026 - PRESENT</p>
              <h3 className="spotlight-title">Special Issue Artwork & Print Production</h3>
              <p className="spotlight-description">
              Designed 100+ layouts and graphics, leading visuals for the Crimson's highest-traffic issues: Housing Day, Commencement, Reunion, and Harvard-Yale.
              </p>
              <Link to="/housing" className="hero-button2">
              Housing Day Full Artwork →
            </Link>
            </div>
              <img src={crim} alt="Special issue design" className="spotlight-image" />
            </div>
          <div className="photo-stats">
            <div className="photo-stat">
              <p className="stat-number">Visual Journalism Pieces</p>
              <p className="stat-label">All graphics designed in Adobe Fresco or Photoshop to accompany campus news and blog posts.</p>
            </div>
          </div>
          <IllustrationGrid images={images} />
        </>
      )}

      {activeTab === 'branding' && (
        <>
          <div className="photo-header-row">
          <h2><span className="colorchange">Branding & Logo Design</span></h2>
        </div>
          <div className="photo-stats">
            <div className="photo-stat">
              <p className="stat-number">Visual Systems and Design Assets</p>
              <p className="stat-label">Helping organizations tell their story - from education and health to campus food delivery, all with an artistic touch.</p>
            </div>
            </div>
          <BrandingGrid projects={projects2} />
        </>
      )}
      {activeTab === 'illustration' && (
        <>
        <div className="photo-header-row">
          <h2><span className="colorchange">Illustration</span></h2>
            <a href="https://unsplash.com/@daisies_and_dots/illustrations" target="_blank" rel="noopener noreferrer">
              <button className="hero-button">Explore my Unsplash</button>
            </a>
        </div>
          <div className="photo-stats">
            <div className="photo-stat">
              <p className="stat-number">Event Illustrator</p>
              <p className="stat-label">@ HarvardxDesign Conference '26</p>
            </div>
            <div className="photo-stat">
              <p className="stat-number">9 Featured Pieces</p>
              <p className="stat-label">on Unsplash's Top Feed</p>
            </div>
            <div className="photo-stat">
              <p className="stat-number">In-Class Doodler</p>
              <p className="stat-label">for basically my entire life :D</p>
            </div>
          </div>
          <IllustrationGrid images={images3} />
        </>
      )}
      {activeTab === 'photography' && (
        <>
        <div className="photo-header-row">
          <h2><span className="colorchange">Photography</span></h2>
            <a href="https://unsplash.com/@daisies_and_dots" target="_blank" rel="noopener noreferrer">
              <button className="hero-button">Explore my Unsplash</button>
            </a>
        </div>
          <div className="photo-stats">
            <div className="photo-stat">
              <p className="stat-number">5+ Years</p>
              <p className="stat-label">Top Unsplash Contributor</p>
            </div>
            <div className="photo-stat">
              <p className="stat-number">2.8 Million Views</p>
              <p className="stat-label">(and counting!) on Unsplash</p>
            </div>
            <div className="photo-stat">
              <p className="stat-number">Photography Intern</p>
              <p className="stat-label">@ Harvard Communications Office</p>
            </div>
          </div>
          
          <IllustrationGrid images={images4} />
        </>
      )}
      {activeTab === 'education' && (
        <>
        <div className="photo-header-row">
          <h2><span className="colorchange">Educational Materials</span></h2>
        </div>
          <div className="spotlight-card">
            <div className="spotlight-text">
              <p className="spotlight-label">FEATURED: INTERNSHIP ~ FEB. 2025 - FEB. 2026</p>
              <h3 className="spotlight-title">Science Communication {' '}
                <a href="https://www.labxchange.org" target="_blank" rel="noopener noreferrer" className="inline-link">
                  <span className="colorchange">@LabXChange</span>
                </a>{' '}</h3>
              <p className="spotlight-description">
              Wrote and designed accessible educational content, from a "Bioinformatics for Beginners" article series to Instagram graphics for science holidays.
              </p>
            <a href="https://www.labxchange.org/org/openbiolab" target="_blank" rel="noopener noreferrer" className="hero-button2">
  View Bioinformatics Article Series
</a>
            </div>
            <img src={labx} alt="Science communication content" className="spotlight-image" />
          </div>
          <div className="photo-stats">
            <div className="photo-stat">
              <p className="stat-number">Personal Study Materials</p>
              <p className="stat-label">A collection of high school and college notes and infographics created using Notability, Canva, and Goodnotes.</p>
            </div>
          </div>
          <IllustrationGrid2 images={images5} />
        </>
      )}
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

export default Designs;