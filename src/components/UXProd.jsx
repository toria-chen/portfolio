import { Link } from "react-router-dom";
import busyb from "../assets/busyb.png";
import rippl from "../assets/rippl.png";
import rainf from "../assets/rainf.png";
import snippet from "../assets/snippet.png";
import classb from "../assets/classb.png";
import ecovante from "../assets/ecovante.png";
import brightstone from "../assets/brightstone.png";
import mision from "../assets/mision.png";

import think from "../assets/think.png";
import stand from "../assets/stand.png";
import walk from "../assets/walk.png";

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
  {
    category: "Mobile Application (Hackathon)",
    title: "Snippet",
    tags: ["Figma", "Product Design", "Rapid Prototyping", "Branding", "UI/UX"],
    description: "Social media meets memory album in this collaborative scrapbooking app. Users can save photos, text snippets, and more to group chat-specific scrapbooks, synced to your messaging app of choice.",
    img: snippet,
    link: "https://devpost.com/software/snippet-wsz0fh",
    linkLabel: "View on Devpost →",
    external: true,
  },
  {
    category: "Web App",
    title: "busy.b",
    tags: ["Flask", "HTML/CSS", "Gamification", "Prototyping", "Github"],
    description: "Programmed, designed, and illustrated assets for a plant-themed microproductivity tracker, emphasizing whimsical visuals and a simple interface for entering and tracking goals.",
    img: busyb,
    link: " https://github.com/toria-chen/busy.b/blob/main/README.md",
    linkLabel: "View on GitHub →",
    external: true,
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
    category: "ADMINISTRATIVE WEB PORTAL",
    name: "Misión Multiplica",
    demoLink: "https://drive.google.com/file/d/1pXkLrrgcr4z-F-7pbp_E4t5IHUIWEYOU/view?usp=sharing",
    img: mision,
    text: "Designed a user-friendly administrative portal for a Chilean donor-matching nonprofit to define, input, and save criteria for subsequent donor applications.",
  },
  {
    category: "MOBILE APPLICATION (HACKATHON)",
    name: "Drop",
    img: rippl,
    text: "A campus connection app tackling loneliness, Drop matches students to weekly kindness challenges, like grabbing coffee or exploring a new club event.",
  },
  {
    category: "WEBSITE REDESIGN",
    name: "Brightstone",
    img: brightstone,
    text: "Full website redesign and online shop design for Brightstone, a residential community providing work opportunities for adults with disabilities.",
  },
];

function MiniSection({ items }) {
  return (
    <div className="mini-grid">
      {items.map((item, i) => (
        <div className="mini-column" key={i}>
          <p className="mini-category">{item.category}</p>
          <h3 className="mini-name">
            {item.name}{' '}
            {item.demoLink && ( <a
              
                href={item.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                (Demo link)
              </a>
            )}
          </h3>
          <img src={item.img} alt={item.name} className="mini-img" />
          <p className="mini-text">{item.text}</p>
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