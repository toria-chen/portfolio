import mision from "../assets/7.png";
import am2 from "../assets/am2.png";
import workflow from "../assets/workflow.png";
import hifi from "../assets/hifi.png";

function Tech() {
  return (
    <section className="case-study">
      <h2><span className="colorchange">Misión Multiplica Admin Page Redesign</span></h2>
       <section className="case-section">
        <h2>Overview</h2>
        <img src={mision} alt="Misión" />
        <h3>
          ✦ <a href="https://socialgood.hcs.harvard.edu/">Harvard Tech 4 Social Good</a> is a student organization that partners with community nonprofits to create accessible digital solutions<br></br><br></br>
          ✦ During <span className="highlight">Fall 2025</span>, our team collaborated with <a href="https://www.misionmultiplica.cl/">Misión Multiplica</a>, a Chilean social funding platform, to provide a UX redesign for their administrative and donor matching webpages
            <br></br><br></br> ✦ <span className="highlight">Skills + Tools:</span> Figma, User Interviews, Prototyping, Affinity Mapping
        </h3>
      </section>
      <section className="case-section">
        <h2>Research & Affinity Mapping</h2>
        <img src={am2} alt="Affinity Mapping" />

        <h3>
         ✦ We conducted a series of <span className="highlight">user interviews</span> with donors and administrative staff to identify major pain points in the current platform<br></br><br></br>
         ✦ Key issues included difficulty filtering and assigning donor matches from the administrative side, as well as a lack of cohesiveness across criteria creation<br></br><br></br>
         ✦ We then compiled our findings into <span className="highlight">affinity maps</span> to inform next steps in the design process
        </h3>

      </section>

      <section className="case-section">
        <h2>Prototyping</h2>
        <img src={workflow} alt="Workflow" />

        <h3>
         ✦ Working in <span className="highlight">Figma</span>, we created prototypes for the evaluation criteria form, donor matching form, and other administrative pages<br></br><br></br>
         ✦ My role involved prototyping a uniform workflow for assigning criteria on the administrative side<br></br><br></br>
         ✦ Following the creation of low and mid-fidelity prototypes, we <span className="highlight">presented our findings</span> to our clients for review and feedback
        </h3>

      </section>

      <section className="case-section">
        <h2>Final High-Fidelity Design</h2>
        <img src={hifi} alt="Final Design" />
        <h3>
         ✦ We incorporated feedback from our clients into the final high-fidelity, interactive design, which was created on Figma<br></br><br></br>
         ✦ The  <a href="https://www.figma.com/proto/pSPRiEeVXTvuUZykvqNFfo/Admin-T4SG-x-Mision-Multiplica?node-id=70-4&t=ggLLoPF2nPhga6pK-1&scaling=contain&content-scaling=fixed&page-id=0%3A1">final design</a> emphasizes friendly colors, clear navigation, and efficient methods for filtering, assigning, and evaluating donor matches<br></br>
         </h3>

      </section>
    </section>
  );
}

export default Tech;
