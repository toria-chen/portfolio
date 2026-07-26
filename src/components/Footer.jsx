import { Link } from "react-router-dom";
import insta from "../assets/instagram.png";
import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.png";
import git from "../assets/github.png";
import bobabear from "../assets/bobabear.png";
import galaxycat from "../assets/galaxycat.png";
import mushy from "../assets/mushy.png";
import veripaws from "../assets/veripaws.png";

function Footer() {
  return (
    <footer>

      <section id="contact">
        <p className="contactme">Let's get in touch!</p>

        <div className="footer-social-icons">
          
            <a href="https://www.instagram.com/daisies._.dots/?igsh=aG45YjNubWZsbDQx#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} alt="Instagram" />
          </a>
          <a href="mailto:vchen@college.harvard.edu">
            <img src={gmail} alt="Gmail" />
          </a>
          
           <a href="https://www.linkedin.com/in/2028victoria-chen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
          
            <a href="https://github.com/toria-chen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={git} alt="GitHub" />
          </a>
        </div>
      </section>
      
      <div className="footer-columns">
          <img src={bobabear} alt="" className="footer-sticker sticker-1" />
          <img src={galaxycat} alt="" className="footer-sticker sticker-2" />
          <img src={mushy} alt="" className="footer-sticker sticker-3" />
          <img src={veripaws} alt="" className="footer-sticker sticker-4" />

        <div className="footer-col">
          <Link to="/product">Case Studies</Link>
          <Link to="/design">Visual Design</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="footer-col">
          <a href="https://www.instagram.com/daisies._.dots/?igsh=aG45YjNubWZsbDQx#" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="mailto:vchen@college.harvard.edu">
            Email
          </a>
          <a href="https://www.linkedin.com/in/2028victoria-chen/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>

        <div className="footer-col">
          <a href="https://github.com/toria-chen" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://unsplash.com/@daisies_and_dots" target="_blank" rel="noopener noreferrer">
            Unsplash
          </a>
          <a href="https://www.thecrimson.com/writer/1220515/Victoria__Chen/" target="_blank" rel="noopener noreferrer">
            The Harvard Crimson
          </a>
        </div>

      </div>

      <p className="footer-copyright">&copy; 2026 Victoria Chen.</p>
    </footer>
  );
}

export default Footer;