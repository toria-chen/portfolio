import mision from "../assets/7.png";
import goodnotes from "../assets/6.png";
import busyb from "../assets/5.png";

function UXProd() {
  return (
    <section className="skills-section">
        <h1>Projects</h1>
            <h2>A collection of <span className="colorchange">UX, product, and web dev projects.</span></h2>
                <div className="skill-card-container">
                    <div className="skill-card">
                        <a href="/busyb"><img src={busyb} alt="Busyb" className="projects-bb" /></a>
                        <h3><span className="highlight">busy.b: A plant-themed productivity web app</span><br></br>
                           ✦ Flask + HTML/CSS
                           </h3>
                    </div>

                    <div className="skill-card">
                        <a href="/t4sg"><img src={mision} alt="Mision Multiplica" className="projects-mm" /></a>
                        <h3><span className="highlight">Harvard Tech 4 Social Good x Misión Multiplica:</span><br></br>
                            ✦ Figma (low and high-fidelity prototypes)
                            </h3>
                    </div>

                    <div className="skill-card">
                        <img src={goodnotes} alt="Goodnotes" className="projects-gn" />
                        <h3><span className="highlight">Goodnotes Redesign:</span><br></br>
                            ✦ Figma (design sprint, top 3 Designathon prize)</h3>
                    </div>

                    <div className="skill-card">
                        <h2><span className="colorchange">In Progress . . .</span></h2>
                        <h3>✦ The Harvard Crimson Website UX Redesign<br></br><br></br>
                        ✦ BonJournal: a digital community <br></br>scrapbooking experience<br></br><br></br>
                        ✦ HUA Club Application Site Competition</h3>
                    </div>

                </div>

    </section>
  );
}

export default UXProd;
