import { Link } from "react-router-dom";
import ecovante from "../assets/ecovante.png";

function Ecovante() {
  return (
    <>
      <section className="case-study">
        <div className="photo-header-row">
          <h2><span className="colorchange">Under Construction! Come back later to see my progress on Ecovante!</span></h2>
        </div>
      <div className="case-back-link">
        <Link to="/product" className="project-cta">← Back to all projects</Link>
      </div>
      </section>
    </>
  );
}

export default Ecovante;