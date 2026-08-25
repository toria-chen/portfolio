import { Link } from "react-router-dom";
import userflow from "../assets/userflow.webp";
import lofis from "../assets/lofis.webp";
import rainf from "../assets/rainf.webp";
import compersona from "../assets/compersona.webp";
import navbar from "../assets/navbar.webp"
import hifi1 from "../assets/hifi1.webp"
import hifi2 from "../assets/hifi2.webp"
import hifi3 from "../assets/hifi3.webp"
import prez from "../assets/prez.webp"
import accessible from "../assets/accessible.webp"

const processStages = [
  { label: "I. Education", id: "education", items: ["Onboard New Designers", "Introduction to Figma", "Project Overview"] },
  { label: "II. Research", id: "research", items: ["Competitor Research", "Problem Statement", "User Interviews"] },
  { label: "III. Ideation", id: "ideation", items: ["User Flow", "Design system", "Information Architecture"] },
  { label: "IV. Design", id: "design", items: ["Wireframes", "Mid-fidelity Prototypes", "Interaction Design"] },
  { label: "V. Feedback", id: "feedback", items: ["Midpoint Presentation", "Usability Testing", "Priority Analysis"] },
  { label: "VI. Handoff", id: "handoff", items: ["Post-midpoint Revisions", "Interaction Redesign", "Final Client Presentation"] },
];

const painSolutionPairs = [
  { pain: "No personalized login or continuation of preferences between uses.", solution: "Guided onboarding flow and unique media recommendations." },
  { pain: "App felt solely informational, like a copy of the website.", solution: "Distinct opportunities to engage (shop, podcasts, etc.) built uniquely for mobile." },
  { pain: "Purpose of sound library and organization were unclear.", solution: "Sound library and mission statement centralized as main destinations." },
];

const suggRevisionPairs = [
  { pain: "Increased interconnectivity between species, projects, sounds, and locations for maximal exploration.", solution: "Facilitated interaction design lessons and whole-team work sessions for our designers to combine their prototypes." },
  { pain: "Account for the majority of app users being Android users in areas with low-bandwith and uneven connectivity.", solution: "Designed a responsive app interface, with whimsical, brand-matched messages for potential error cases." },
  { pain: "Emphasize the balanced partnership between Rainforest Connection and indigenous sellers to app users.", solution: "Addition of indigenous-designed merchandise to preserve cultural integrity and stewardship." },
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

function Rainforest() {
  return (
    <section className="case-study">
      <div className="case-header">
        <p className="case-label">HARVARD TECH FOR SOCIAL GOOD × RAINFOREST CONNECTION</p>
        <h1 className="case-title">Mobile App + Sound Library Redesign</h1>
        <div className="case-tags">
          <span className="project-tag">UX Research</span>
          <span className="project-tag">Information Architecture</span>
          <span className="project-tag">Figma</span>
          <span className="project-tag">Prototyping</span>
          <span className="project-tag">UI/UX</span>
          <span className="project-tag">Usability Testing</span>
        </div>
      </div>

      {/* overview */}
      <section className="case-overview">
        <img src={rainf} alt="Rainforest Connection prototypes" className="case-overview-img" />

        <div className="case-overview-text">
          <h2 className="case-section-heading">Overview</h2>
          <p>
            <a href="https://socialgood.hcs.harvard.edu/" target="_blank" rel="noopener noreferrer">Harvard Tech For Social Good</a> is a student organization partnering
            with community nonprofits to build digital solutions. During Spring 2026, I co-led a team of 5 students to redesign the mobile app for {' '}
            <a href="https://rfcx.org/" target="_blank" rel="noopener noreferrer">Rainforest Connection</a>, an organization using sound technology to protect biodiversity around the world.
          </p>

          <p><span className="bold">Collaborators:</span> <a href="https://www.linkedin.com/in/kacy-bao-b441ab18a/" target="_blank" rel="noopener noreferrer">Kacy Bao</a>, 
          <a href="https://www.linkedin.com/in/margaretslee/" target="_blank" rel="noopener noreferrer"> Margaret Lee</a>,
          <a href="https://www.linkedin.com/in/safaa-s-mohammed/" target="_blank" rel="noopener noreferrer"> Safaa Mohammed</a>,
          <a href="https://www.linkedin.com/in/giancarla-burgos/" target="_blank" rel="noopener noreferrer"> Giancarla Burgos</a></p>

          <div className="case-mini-stats">
            <div className="case-mini-stat">
              <p className="mini-stat-label">MY ROLE</p>
              <p className="mini-stat-value">UX Design Lead<br></br>UX Education Presenter</p>
            </div>
            <div className="case-mini-stat">
              <p className="mini-stat-label">END PRODUCT</p>
              <p className="mini-stat-value">High-Fidelity Figma Prototype, Ready for Handoff</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS TRACKER */}
      <section className="case-process">
        <h2 className="case-section-heading" id="education"> Objective + Process</h2>
          <p>
            The previous app lacked login or onboarding flows, leaving users with <span className="bold">no sense of continuity</span> across sessions. 
            Our goal was to give the app a <span className="colorchangebold">community-centric identity</span> distinct from the website, emphasizing Rainforest 
            Connection's <span className="bold">sound library</span> while introducing new ways for users to engage.
          </p>
        <div className="process-stage-row">
  {processStages.map((stage, i) => (
    
      <a href={`#${stage.id}`}
      className="process-stage-box"
      key={i}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(stage.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
      <p className="process-stage-label">{stage.label}</p>
      <ul className="process-stage-list">
        {stage.items.map((item, j) => (
          <li key={j}>{item}</li>
        ))}
      </ul>
    </a>
  ))}
</div>
      </section>

      {/* RESEARCH & AFFINITY MAPPING */}
      <section className="case-section-block">
        <h2 className="case-section-heading" id="research"> Research</h2>
        <img src={compersona} alt="User Personas and Competitive Analysis" className="case-block-img" />
        <p>
          Following the designers' onboarding and introduction to Figma, we conducted <span className="bold">user interviews</span> with administrators to identify their goals for the redesigned app.
          We then used our insights to inform our competitive analysis on <span className="bold">Spotify</span> (caters to a listening-centric experience) and <span className="bold">Pinterest</span> (personalization and preference-informed app usage). 
          Additionally, we created user personas, and collectively identified the following <span className="colorchangebold">pain points and potential solutions</span>.
        </p>
        <PainSolutionBlock point={painSolutionPairs} />
      </section>

      {/* PROTOTYPING */}
      <section className="case-section-block">
        <h2 className="case-section-heading" id="ideation"> Ideation</h2>
        <img src={userflow} alt="Design System + User Flow" className="case-block-img" />
        <p>
          As the senior designer, I created a <span className="bold">uniform design system</span> and consolidated our research into a <span className="colorchangebold">new user flow and 
          navigation bar</span> (I created the new navigation icons with Adobe tools and integrated them into our prototyping documents). 
          We prioritized a <span className="bold">personalized onboarding experience</span> and interchangeable paths to the sound library in our information architecture.
        </p>
        <div className="hero-buttons">
              <a href="https://www.figma.com/design/oCYPM7U0V5HMSdkrYGpFVN/RFCx-Design-System?node-id=4-6&t=im4OcXV7CAMsuRrR-1" target="_blank" rel="noopener noreferrer">
                <button className="hero-button">Explore The Full Design System</button>
              </a>

              <a href="https://www.figma.com/board/6vfQlXVJ1yDXbkbyA5rXvk/RFCX-User-Flow?node-id=0-1&t=wscVRfgvvCI2MC1r-1" target="_blank" rel="noopener noreferrer">
                <button className="hero-button">Check Out Our Figjam User Flow</button>
              </a>
            </div>
      </section>

      <section className="case-section-block">
        <h2 className="case-section-heading" id="design"> Design</h2>
        <img src={lofis} alt="Low-Fidelity Sketches" className="case-block-img" />
        <p>
           I supported my designers through the phase of wireframe sketches and <span className="bold">low-fidelity designs</span> (credit for the lofis above goes to <a href="https://www.linkedin.com/in/margaretslee/" target="_blank" rel="noopener noreferrer"> Margaret Lee</a> and
          <a href="https://www.linkedin.com/in/safaa-s-mohammed/" target="_blank" rel="noopener noreferrer"> Safaa Mohammed</a>), prioritizing a balance between the <span className="bold">CTO, CMO, and 
           administrators' vision</span> for the redesign. These drafts showcase the emphasis we placed on a <span className="colorchangebold">thorough onboarding process</span> that recorded user preferences
           and used these to inform future sound, project, and media recommendations.
        </p>

      <section className="case-overview">
        <img src={navbar} alt="Navbar Redesign" className="case-overview-img" />

        <div className="case-overview-text">
          <h2 className="case-section-heading">Featured: Nav Bar Redesign</h2>
          <p>
            During this stage, I redesigned the <span className="colorchangebold">navigation bar</span> with a number of considerations in mind, including:
            <br></br>✧ Creating a personalized Home page and separating out the Library
            <br></br>✧ Integrating the new <span className="bold">Shop and Podcast</span> experiences
            <br></br>✧ Designing <span className="bold">intuitive visual icons</span> for each tab
          </p>
        </div>
      </section>
      <div className="hero-buttons">
              <a href="https://docs.google.com/presentation/d/1fqLJ0oHO2LFm9VINxKrFMhCjSuHFYLOcYaTBlKBUjwI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className="hero-button">Full Mid-Fidelity Prototypes and Presentation</button>
              </a>
            </div>
      </section>

      {/* FINAL DESIGN */}
      <section className="case-section-block">
        <h2 className="case-section-heading" id="feedback"> Feedback to Hi-Fis</h2>
         <p>
          Following our <span className="colorchangebold">midpoint client presentation</span>, in which we presented our <span className="bold">user research, information architecture, and mid-fidelity
          prototypes</span>, we received several items of <span className="bold">feedback</span> from our administrative point person, the CTO, and the CMO. 
         </p>
         <SuggRevisionBlock point={suggRevisionPairs} />
        <img src={hifi1} alt="Final high-fidelity design" className="case-img" />
        <img src={hifi2} alt="Final high-fidelity design" className="case-img" />
        <img src={hifi3} alt="Final high-fidelity design" className="case-img" />
        <p>
          Through this project, I learned the importance of timely communication and creativity in <span className="bold">consolidating the unique viewpoints of our stakeholders</span> (the founder, administrators, CTO, CMO)
          into a tangible, focused outcome. In particular, we tackled the main areas where the original app lacked <span className="bold">clarity</span>: 
          </p>
          <p>
          ✧ "Why should the user return after one listening session, and how can we <span className="colorchangebold">improve retention</span>?" 
          <br></br>✧ "How can we <span className="colorchangebold">ethically raise support</span> and opportunities for indigenous organization partners?"
          <br></br>✧ "How can we <span className="colorchangebold">clearly convey the mission</span> of this complex, technologically and ecologically driven organization?" 
        </p> 
      </section>
      <section className="case-overview">
        <img src={prez} alt="Final Presentation" className="case-overview-img" />

        <div className="case-overview-text">
          <h2 className="case-section-heading" id="handoff"> Final Takeaways/Handoff</h2>
          <p>
          Our final product covered a <span className="bold">variety of challenges</span> in a clear, elegant way - from the personalized onboarding flow to the user-friendly podcasts and marketplace, the technologically-inspired sound library to the clear mission statement and values.
          </p><p><br></br>Before handoff, we presented our work to the founder of Rainforest Connection, <span className="bold">Topher White</span>, and received enthusiastic feedback about the <span className="colorchangebold">level of detail and care</span> we put into the project. Following our semester-long work, the project is now with
          the <span className="bold">RFCX Tech Team</span>, and ready to implement.
          </p>
        </div>
      </section>
      <section className="case-overview">
        <img src={accessible} alt="Education + Accessibility" className="case-overview-img" />

        <div className="case-overview-text">
          <h2 className="case-section-heading">UX Education + Accessbility</h2>
          <p>
          Transforming our ideas into a <span className="bold">concise</span>, shippable product took real collaboration and from our designers, especially since two of them had never
          used Figma before. Creating educational resources for them, I was challenged to <span className="bold">rethink my own perspective</span> on the design process - particularly around <span className="colorchangebold">accessibility</span>, and what 
          it means to design for an audience of scientists, students, and users in low-tech areas alike. At left is one of several activities 
          I created, introducing subjects as technical as Figma shortcuts, to broader themes like accessibility and user engagement. View the full document <a href="https://www.figma.com/community/file/1591154954479511153" target="_blank" rel="noopener noreferrer"> here</a>.
          </p>
          <p>
          <br></br>Beyond mentoring my team's designers, I <span className="bold">co-led a UX workshop</span> on "Design from a Marketing Perspective" for a cohort of <span className="bold">20+ designers</span>, which was a great way to connect with the wider Tech
          For Social Good community. These experiences have inspired me to consider pursuing <span className="colorchangebold">UX education and mentorship</span> next semester, and beyond.
          </p>
        </div>
      </section>

      <div className="case-back-link">
        <Link to="/casestudies" className="project-cta">← Back to all projects</Link>
      </div>
    </section>
    
  );
}

export default Rainforest;