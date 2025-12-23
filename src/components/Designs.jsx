import bw from "../assets/bw.PNG";
import dash from "../assets/dash.PNG";
import dog from "../assets/dog.PNG";
import donut from "../assets/donut.PNG";
import fall from "../assets/fall.PNG";
import flyby from "../assets/flyby.jpg";
import friendship from "../assets/friendship.PNG";
import hy from "../assets/hy.PNG";
import kirk from "../assets/kirk.PNG";
import polyamory from "../assets/polyamory.PNG";
import selfie from "../assets/selfie.jpg";
import songs from "../assets/songs.PNG";

import bear from "../assets/bear.PNG";
import bf from "../assets/bf.PNG";
import bird from "../assets/bird.PNG";
import scifi from "../assets/scifi.PNG";
import sri from "../assets/SRI.svg";
import coop from "../assets/coop.PNG";
import grabbit from "../assets/grabbit.PNG";
import grabbit2 from "../assets/grabbit2.PNG";
import ignited from "../assets/ignited.PNG";
import openbio from "../assets/openbio.PNG";
import ym1 from "../assets/ym1.PNG";
import ym2 from "../assets/ym2.PNG";

const images = [bw, dash, dog, donut, fall, flyby, friendship, hy, kirk, polyamory, selfie, songs];
const images2 = [sri, coop, grabbit, grabbit2, ignited, openbio, bear, bf, bird, scifi, ym1, ym2];

function Designs() {
  return (
    <section className="designs">
        <h1>Design</h1>
         <h2><span className="colorchange">The Harvard Crimson</span></h2>
        <h3>✦ With over <span className="highlight">1.5 million viewers</span> per month, the Crimson is one of the nation's top student-run newspapers<br></br>
        ✦ As Design Executive, I've created <span className="highlight">300+ graphics</span> for print and web formats using Adobe Fresco, Photoshop, and Illustrator<br></br>
        ✦ I specialize in creating <span className="highlight">student-friendly content</span> for blogs, op-eds, and social media, and have spearheaded the design of <span className="highlight">special issues</span> like Commencement, the Harvard-Yale Game, and Housing Day
        </h3>
        <a href="https://www.thecrimson.com/writer/1220515/Victoria__Chen/" target="_blank" rel="noopener noreferrer">
              <button className="about-button">Full Crimson Portfolio</button>
            </a> 

            <a href="https://www.thecrimson.com/topic/harvard-housing-market-2025/" target="_blank" rel="noopener noreferrer">
              <button className="about-button">Housing Day Issue</button>
            </a> 

    <section className="image-marquee">
        <div className="marquee__track">
          {images.map((img, i) => (
            <img key={i} src={img} alt={`Project ${i}`} />
          ))}
          {images.map((img, i) => (
            <img key={i + images.length} src={img} alt={`Project ${i}`} />
          ))}
        </div>
    </section>

        <h2><span className="colorchange">Branding + Promotional Materials</span></h2>
        <h3>✦ <span className="highlight">Logo creation</span> and <span className="highlight">brand identity</span> for startups and nonprofits such as Grabbit and IgnitEd<br></br>
        ✦ <span className="highlight">Merch, flyer, and social media</span> designs for large-scale educational organizations like LabXchange and Harvard OpenBio<br></br>
        ✦ I'm passionate about crafting <span className="highlight">colorful, engaging visual content</span> to fit diverse purposes, from education to advocacy
        </h3>
    <section className="image-marquee">
        <div className="marquee__track">
          {images2.map((img, i) => (
            <img key={i} src={img} alt={`Project ${i}`} />
          ))}
          {images2.map((img, i) => (
            <img key={i + images.length} src={img} alt={`Project ${i}`} />
          ))}
        </div>
    </section>
    </section>
  );
}

export default Designs;
