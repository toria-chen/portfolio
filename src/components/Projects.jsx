import { Link } from 'react-router-dom';
import one from '../assets/1.png';
import two from '../assets/2.png';
import three from '../assets/3.png';
import four from '../assets/4.png';
import cases from "../assets/case studies.png"
import visuals from "../assets/visuals.png"

const skillColumns = [
  {
    img: one,
    label: "Ideation",
    description: "Imagination is my superpower, bringing together years of psychology research experience with my love for understanding people's stories."
  },
  {
    img: two,
    label: "Storytelling",
    description: "Writing for The Harvard Crimson (and loads of fanfiction!) has led me to treat design as an immersive conversation between the user and the platform."
  },
  {
    img: three,
    label: "Prototyping",
    description: "I'm (in)famous for churning out full Figma prototypes in hours, not days — speed that comes not from cutting corners, but from genuine passion for my work."
  },
  {
    img: four,
    label: "Visualization",
    description: "My love of traditional and digital illustration means art isn't just a finishing touch, but part of the design process itself (all artwork on this site is self-drawn!)."
  },
];

function Projects() {
  return (
    <>
      <section className="skills-section">
        <h2>My Process</h2>

        <section className="skills-table">
          {skillColumns.map((col, i) => (
            <div className="skills-table-col" key={i}>
              <img src={col.img} alt={col.label} className="skills-table-img" />
              <p className="skills-table-label">{col.label}</p>
              <p className="skills-table-description">{col.description}</p>
            </div>
          ))}
        </section>

        <div className="process-cta-stack">
  <div className="cta-row">
    <img src={cases} alt="Case studies preview" className="cta-collage-img" />
    <Link to="/product">
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