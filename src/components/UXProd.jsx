import { Link } from "react-router-dom";
import busyb from "../assets/busyb.webp";
import rippl from "../assets/rippl.webp";
import rainf from "../assets/rainf.webp";
import snippet from "../assets/snippet.webp";
import classb from "../assets/classb.webp";
import ecovante from "../assets/ecovante.webp";
import brightstone from "../assets/brightstone.webp";
import mision from "../assets/mision.webp";

import think from "../assets/think.webp";
import stand from "../assets/stand.webp";
import walk from "../assets/walk.webp";

const projects = [
{
    category: "End-to-End Mobile Application",
    title: "Rainforest Connection",
    tags: ["UX Research", "Information Architecture", "Figma", "Prototyping", "Product Design", "Usability Testing"],
    description: "Led a team of 5 UX designers to redesign Rainforest Connection's app, boosting user engagement through the integration of sound libraries, conservation stories, and biodiversity project spotlights.",
    img: rainf,
    link: "/rfcx",
  },
  {
    category: "Web App (Hackathon)",
    title: "ClassBandit",
    tags: ["Figjam Ideation", "Illustration", "Branding", "Animation", "Graphic Design"],
    description: "Animated and illustrated all characters and developed brand identity for this digital class pet, working with a team of 5 educators and software developers to promote social-emotional learning in K-6 classrooms.",
    img: classb,
    link: "/bandit",
  },
  {
    category: "Responsive Website",
    title: "Ecovante",
    tags: ["Figma", "Rapid Prototyping", "Branding", "Product Design", "Web Development", "Claude Code", "Github"],
    description: "As the founding and only designer, led UI/UX design, branding, and handoff to front-end development for a website connecting ecotourism travelers with nonprofits around the world.",
    img: ecovante,
    link: "/eco",
    linkLabel: "Case Study Coming Soon →",
  },
];

function ProjectRow({ project }) {
  return (
    <div className="project-row">
      <div className="project-row-text">
        <p className="project-category">{project.category}</p>
        <h2 className="project-title">{project.title}</h2>

        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span className="project-tag" key={i}>{tag}</span>
          ))}
        </div>

        <p className="project-description">{project.description}</p>

        {project.external ? (
  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-cta">
    {project.linkLabel || "Read More →"}
  </a>
) : (
  <Link to={project.link} className="project-cta">
    {project.linkLabel || "Read More →"}
  </Link>
)}
      </div>

      <div className="project-row-image">
        <img src={project.img} alt={project.title} />
      </div>
    </div>
  );
}

const miniProjects = [
  {
    category: "WEB APPLICATION",
    title: "busy.b",
    linkLabel: null,
    image: busyb,
    tags: ["Flask", "HTML/CSS", "Gamification", "Prototyping"],
    description: "Programmed and illustrated assets for a plant-themed productivity tracker, emphasizing whimsical visuals and a simple goal-tracking interface.",
    buttonLabel: "View on GitHub",
    buttonLink: "https://github.com/toria-chen/busy.b/blob/main/README.md",
  },
  {
    category: "MOBILE APPLICATION (HACKATHON)",
    title: "Snippet",
    linkLabel: null,
    image: snippet,
    tags: ["React Native", "UI/UX", "Hackathon"],
    description: "Social media meets memory album—users can save photos, text snippets, and more to collaborative digital scrapbooks, synced to your group chats.",
    buttonLabel: "View on Devpost",
    buttonLink: "https://devpost.com/software/snippet-wsz0fh",
  },
  {
    category: "ADMINISTRATIVE WEB PORTAL",
    title: "Misión Multiplica",
    linkLabel: null,
    image: mision,
    tags: ["Figma", "UX Research", "Nonprofit"],
    description: "Designed a user-friendly administrative portal for a Chilean donor-matching nonprofit to define, input, and save criteria for subsequent donor applications.",
    buttonLabel: "Watch Demo Here",
    buttonLink: "https://drive.google.com/file/d/1pXkLrrgcr4z-F-7pbp_E4t5IHUIWEYOU/view?usp=drive_link",
  },
];
function MiniSection({ items }) {
  return (
    <div className="mini-grid">
      {items.map((item, i) => (
        <div className="mini-column" key={i}>
          <p className="mini-category">{item.category}</p>
          <h3 className="mini-name">{item.title}</h3>

          <img src={item.image} alt={item.title} className="mini-img" />

          <div className="mini-project-tags">
            {item.tags.map((tag, j) => (
              <span className="mini-tag" key={j}>{tag}</span>
            ))}
          </div>

          <p className="mini-text">{item.description}</p>

          <a href={item.buttonLink} target="_blank" rel="noopener noreferrer">
            <button className="mini-project-button">{item.buttonLabel} →</button>
          </a>
        </div>
      ))}
    </div>
  );
}

function UXProd() {
  return (
    <section className="projects-page">
      <div className="projects-header">
        <div className="projects-title-group">
          <img src={think} alt="" className="think-figure" />
          <h1>Projects</h1>
        </div>

        <div className="header-figures">
            <img src={stand} alt="" className="header-figure" style={{ animationDelay: '0.5s' }} />
            <img src={walk} alt="" className="header-figure" style={{ animationDelay: '1s' }} />

        <div className="walk-dots">
            <span className="walk-dot" style={{ animationDelay: '1.3s' }}>.</span>
            <span className="walk-dot" style={{ animationDelay: '1.6s' }}>.</span>
            <span className="walk-dot" style={{ animationDelay: '2s' }}>.</span>
        </div>
    </div>

        <p className="projects-subtitle">A collection of my UX, product, and web development work.</p>
      </div>

      {projects.map((project, i) => (
        <ProjectRow project={project} key={i} />
      ))}
      <MiniSection items={miniProjects} />

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
  );
}

export default UXProd;