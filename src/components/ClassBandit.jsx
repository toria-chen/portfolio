import { Link } from "react-router-dom";
import data from "../assets/data.png";
import levels from "../assets/levels.png";
import classb from "../assets/classb.png";
import jam from "../assets/jam.png";
import pets from "../assets/pets.png"
import demoVideo from '../assets/demo.mp4';
import gallery from "../assets/gallery.png";
import final from "../assets/final.png";

const processStages = [
  { label: "I. Ideation (Wk. 1)", items: ["Draft Project Concept", "Identify Pain Points", "Competitor Research"] },
  { label: "II. Visualization", items: ["Illustration Drafts", "Character Design", "Style Exploration"] },
  { label: "III. Research (Wk. 2)", items: ["Survey Educators", "Data Visualization", "CASEL Integration"] },
  { label: "IV. Design (Wk. 3-4)", items: ["Figma Prototypes", "Information Architecture", "Visual Asset Integration"] },
  { label: "V. Implementation", items: ["Illustration Revisions", "Character Animation", "Handoff to Engineer"] },
  { label: "VI. Next Steps", items: ["Usability Testing", "Expanded Character Art", "Connected SEL Ecoystem"] },
];

const painSolutionPairs = [
  { pain: "No opportunities for students to practice emotional regulation and resolution strategies regularly.", solution: "Bandit helps guide social-emotional learning and reflection in real moments." },
  { pain: "Most digital tools are individualistic or pit students against one another, increasing social comparison.", solution: "Caring for Bandit and levelling up are all collaborative, whole-class endeavors." },
  { pain: "Community-building activities like a real-life class pet are often expensive and hard for educators to maintain.", solution: "A digital solution provides the same community-building, without the cost." },
];

const suggRevisionPairs = [
  { pain: "Increase opportunities for proactive learning rather than waiting for conflict", solution: "Story sessions and morning reflections with Bandit to familiarize students, teacher dashboards to track progress." },
  { pain: "Integrating edtech tools into the current K-6 market can be difficult as a start-up", solution: "Explore product-market fit, while providing free trials and usability testing to educators in our immediate circles." },
  { pain: "Differentiate ourselves from existing tools like ClassDojo and Thumbsters.", solution: "Market our SEL ecosystem around community and shared goals between students, families and educators." },
];

function PainSolutionBlock() {
  return (
    <section className="pain-solution-section">
      <div className="pain-solution-grid">
        {painSolutionPairs.map((pair, i) => (
          <div className="pain-solution-pair" key={i}>
            <div className="pain-block">
              <p className="pain-solution-label">PAIN POINT</p>
              <p className="pain-solution-text">{pair.pain}</p>
            </div>

            <div className="pair-arrow">↓</div>

            <div className="solution-block">
              <p className="pain-solution-label">SOLUTION</p>
              <p className="pain-solution-text">{pair.solution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SuggRevisionBlock() {
  return (
    <section className="pain-solution-section">
      <div className="pain-solution-grid">
        {suggRevisionPairs.map((pair, i) => (
          <div className="pain-solution-pair" key={i}>
            <div className="pain-block">
              <p className="pain-solution-label">SUGGESTION</p>
              <p className="pain-solution-text">{pair.pain}</p>
            </div>

            <div className="pair-arrow">↓</div>

            <div className="solution-block">
              <p className="pain-solution-label">REVISION</p>
              <p className="pain-solution-text">{pair.solution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ClassBandit() {
  return (
    <section className="case-study">
      <div className="case-header">
        <p className="case-label">NYEDTECH HACKATHON 1ST PRIZE: CLASSBANDIT</p>
        <h1 className="case-title">Digital Class Pet Web Application</h1>
        <div className="case-tags">
          <span className="project-tag">Figjam Ideation</span>
          <span className="project-tag">Illustration</span>
          <span className="project-tag">Branding</span>
          <span className="project-tag">Animation</span>
          <span className="project-tag">Graphic Design</span>
        </div>
      </div>

      {/* overview */}
      <section className="case-overview">
        <img src={classb} alt="Rainforest Connection prototypes" className="case-overview-img" />

        <div className="case-overview-text">
          <h2 className="case-section-heading">Overview</h2>
          <p>
            During the month-long <a href="https://www.nyedtechhackathon.com/home" target="_blank" rel="noopener noreferrer">NYEdTech Hackathon</a>, I teamed up with four designers, educators, and engineers to create the 
            <span className="bold"> winning project</span>, ClassBandit. Inspired by the lack of <span className="bold">social-emotional learning curriculum</span> in classrooms, ClassBandit encourages collaborative 
            care-taking of a <span className="colorchangebold">shared class pet</span>, teaching students the importance of responsibility and community.
          </p>

          <p><span className="bold">Collaborators:</span> <a href="https://www.linkedin.com/in/jenny-jin-ux/" target="_blank" rel="noopener noreferrer">Jenny Jin</a>, 
          <a href="https://www.linkedin.com/in/casey-n-monahan/" target="_blank" rel="noopener noreferrer"> Casey Monahan</a>,
          <a href="https://www.linkedin.com/in/diamond-edmonds-455b9a41/" target="_blank" rel="noopener noreferrer"> Diamond Edmonds</a>,
          <a href="https://www.linkedin.com/in/sri-harsha-konda-412997bb/" target="_blank" rel="noopener noreferrer"> Sri Harsha Konda</a></p>

          <div className="case-mini-stats">
            <div className="case-mini-stat">
              <p className="mini-stat-label">MY ROLE</p>
              <p className="mini-stat-value">Illustrator/Graphic Designer</p>
            </div>
            <div className="case-mini-stat">
              <p className="mini-stat-label">END PRODUCT</p>
              <p className="mini-stat-value">Working Web Application</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS TRACKER */}
      <section className="case-process">
        <h2 className="case-section-heading">Objective + Process</h2>
          <p>91.7% of teachers agree that <span className="bold">classroom community is essential</span> — yet few tools exist to build it. 
            For our hackathon project, we reframed the classroom as a <span className="bold">shared ecosystem</span> through CASEL-aligned web app and an 
            <span className="colorchangebold"> engaging class pet character</span>, making accountability and learning a cooperative experience.
          </p>
        <div className="process-stage-row">
          {processStages.map((stage, i) => (
            <div className="process-stage-box" key={i}>
              <p className="process-stage-label">{stage.label}</p>
              <ul className="process-stage-list">
                {stage.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* RESEARCH & AFFINITY MAPPING */}
      <section className="case-section-block">
        <h2 className="case-section-heading">Ideation to Visualization</h2>
        <img src={jam} alt="Initial Figjam Board" className="case-block-img" />
        <p>
          We began by brainstorming <span className="bold">characters and interactions</span> that our digital pet would encounter during day-to-day classroom activities. For the default "mascot" of the app, 
          we chose a <span className="colorchangebold">guinea pig named Bandit</span>, who would require both typical day-to-day care (water, feeding, cleaning, rest), and special weekly tasks. By 
          <span className="bold"> completing tasks as a class</span>, students can unlock points and levels, which lead to new pet friends, accessories, and more.
        </p>
      </section>
      <section className="case-overview">
        <img src={pets} alt="Pet and Icon Artwork" className="case-overview-img" />

        <div className="case-overview-text">
          <h2 className="case-section-heading">Featured: My Art Process</h2>
          <p>
          Both my <span className="bold">experience in character artwork</span> and my love of animals came in handy in my role as illustrator/graphic designer, as I started by creating a variety of pet characters
          to choose from. Blending my personal style with the inspiration images my team agreed upon, I illustrated each vector graphic on Adobe Fresco, aiming to create 
          a <span className="colorchangebold">playful, instantly-recognizable brand identity</span>. I worked closely with the <span className="bold">UX and Product designers</span> to balance the gamified and education-friendly aspects of the visuals. 
          </p>
          <p><br></br>During this phase, I also created initial assets for the main daily tasks - <span className="bold">water, food, and cleaning</span> - as well as <span className="bold">accessory icons</span> such as Bandit's mask.</p>
        </div>
      </section>

      {/* PROTOTYPING */}
      <section className="case-section-block">
        <h2 className="case-section-heading">Research To User Flow</h2>
        <img src={data} alt="Survey Results, Initial User Flow" className="case-block-img" />
        <p>
         Our UX researcher surveyed <span className="bold">12 K-6 educators</span> and found that managing student conflict, and promoting an <span className="colorchangebold">empathetic classroom community</span> were the 
         main struggles of day-to-day work. Subsequently, we incorporated a <span className="bold">CASEL-aligned</span> (Collaborative for Academic, Social, and Emotional Learning) survey for educators
         to enter their main class goals during onboarding. We then brainstormed the following solutions to shortcomings of current digital tools.
        </p>
            <PainSolutionBlock point={painSolutionPairs} />
      </section>

      <section className="case-section-block">
        <h2 className="case-section-heading">Design</h2>
        <img src={levels} alt="Design and Onboarding Flow" className="case-block-img" />
        <p>
          Synchronously with the design process, I continued to <span className="bold">illustrate graphics</span> of Bandit, other characters, and accessories that matched the product's visual identity.
          In addition, I experimented with creating <span className="colorchangebold">emotionally-vibrant, animated versions</span> of Bandit, including expressions of resting/sleeping, sadness, happiness, winking, and more.
          I also assisted in <span className="bold">UI design and feedback</span> to my teammates until handoff.
        </p>
      </section>
      <section className="case-overview">
        <img src={gallery} alt="All Illustrations" className="case-overview-img" />
        <div className="case-overview-text">
          <h2 className="case-section-heading">Illustration Gallery</h2>
          <p>
          I've long been inspired by character-centric applications like Duolingo, but this was <span className="bold">my first time</span> fully illustrating and creating graphics for an entire application.
          Although generative AI makes it easy to skip original art entirely, our judges cited <span className="colorchangebold">the energy and creativity behind our visuals</span> as a key reason we won — 
          proof that an <span className="bold">original artistic identity</span> can still set a project apart.
          </p>
        </div>
      </section>

      {/* FINAL DESIGN */}
      <section className="case-section-block">
        <h2 className="case-section-heading">Final Product + Presentation</h2>
         <p>
          After a month of working with our hackathon teams, it was time for the <span className="colorchangebold">final submission and presentation</span>. 
          Below is a demo video of our product (credit to <a href="https://www.linkedin.com/in/casey-n-monahan/" target="_blank" rel="noopener noreferrer"> Casey Monahan</a>), although we are currently in the process of making
          revisions and expanding the ClassBandit ecosystem beyond a single use case.
         </p>
          <video controls className="case-video">
            <source src={demoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        <p>
          As a developmental psychology and education student, this project opened my eyes to the role of technology in <span className="colorchangebold">connecting academic and emotional learning</span> for K-6 students. While educators may be given plenty of 
          curriculum for core subjects like math or history, there are rarely <span className="bold">well-structured resources</span> for fulfilling, community-building activities in the classroom. By shaping our app around educator surveys and proven social-emotional learning
          frameworks like CASEL, we prioritized <span className="bold">research just as much as design</span> while addressing the following points:
          </p>
          <p>
          ✧ "How can we avoid individualistic competition, while still <span className="colorchangebold">providing incentive</span> for students to learn and grow?" 
          <br></br>✧ "What moments turn into opportunities for <span className="colorchangebold">emotional growth and reflection</span> without seeming forced or unnatural?"
          <br></br>✧ "How can we provide fun, gamified characters and storylines without falling into the trap of becoming a <span className="colorchangebold">digital distractor</span>?" 
        </p> 
        <p>
         These are just a few considerations we covered, and hope to continue integrating along with the <span className="bold">judges' feedback</span> below:
          </p>

        <SuggRevisionBlock point={suggRevisionPairs} />
      </section>
      <section className="case-overview">
        <img src={final} alt="Finished Dashboard" className="case-overview-img" />
        <div className="case-overview-text">
          <h2 className="case-section-heading">Next Steps</h2>
          <p>
          Since winning the hackathon, our team has been continuing to work asynchronously on ClassBandit, with the goal of gathering more <span className="bold">usability testing 
          data and market research.</span></p>
          <p><br></br>
          We have received <span className="bold">feedback and coaching</span> from a variety of individuals, including Harvard GSE Professor David Dockterman and co-founder of
          LearnLaunch, Jean Hammond, and are hoping to reshape our product into a <span className="colorchangebold">usable, market-suitable digital tool</span> by the end of the year.
          </p>
        </div>
      </section>
      <div className="hero-buttons">
              <a href="https://www.nyedtechhackathon.com/2026-submissions" target="_blank" rel="noopener noreferrer">
                <button className="hero-button">View Our Project On the NyEdTech Site</button>
              </a>

              <a href="https://drive.google.com/file/d/1kUyKqA7kQYuHMG1m8KOt_9tw1Cwr24We/view" target="_blank" rel="noopener noreferrer">
                <button className="hero-button">Check Out Our Winning Presentation</button>
              </a>
            </div>

      <div className="case-back-link">
        <Link to="/product" className="project-cta">← Back to all projects</Link>
      </div>
    </section>
    
  );
}

export default ClassBandit;
