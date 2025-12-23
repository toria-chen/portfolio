import insta from "../assets/instagram.png";
import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.png";
import git from "../assets/github.png";

function Footer() {
  return (
    <footer>

      <section id="contact">
        <p className="contactme">Let's get in touch!</p>

        <div className="footer-social-icons">
          <a
            href="https://www.instagram.com/daisies._.dots/?igsh=aG45YjNubWZsbDQx#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} alt="Instagram" />
          </a>
          <a href="mailto:vchen@college.harvard.edu">
            <img src={gmail} alt="Gmail" />
          </a>
          <a
            href="https://www.linkedin.com/in/2028victoria-chen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/toria-chen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={git} alt="GitHub" />
          </a>
        </div>
      </section>

      <p>&copy; 2026 Victoria Chen.</p>
    </footer>
  );
}

export default Footer;


