import mision from "../assets/7.png";
import goodnotes from "../assets/6.png";
import busyb from "../assets/5.png";
import flowers from '../assets/flowers.GIF';

import React from "react";

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

function Projects() {
  return (
    <section className="skills-section">
        <h2><a href="/design">UX + Product</a></h2>
            <section className="skills-section">
                <div className="skill-card-container">
                    <div className="skill-card">
                        <a href="/busyb"><img src={busyb} alt="Busyb" className="projects-bb" /></a>
                    </div>

                    <div className="skill-card">
                        <a href="/t4sg"><img src={mision} alt="Mision Multiplica" className="projects-mm" /></a>
                    </div>

                    <div className="skill-card">
                        <img src={goodnotes} alt="Goodnotes" className="projects-gn" />
                    </div>

                    <div className="skill-card">
                        <img src={flowers} alt="Flowers" className="flowers-gn" />
                        <h3>Skills + Tools<br></br>
                        HTML | CSS | Flask | Python | JavaScript | Figma</h3>
                    </div>
                </div>
            </section>

       <h2><a href="/design">Design + Digital Illustration</a></h2>
        <h3>✦ The Harvard Crimson Design Portfolio</h3>
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

    <h3>✦ Branding, Media, and Promotional Work</h3>
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

export default Projects;
