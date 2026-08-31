import { useEffect, useState, useRef } from 'react';
import one from '../assets/1.webp';
import two from '../assets/2.webp';
import three from '../assets/3.webp';
import four from '../assets/4.webp';
import { Link } from 'react-router-dom';
import flat from "../assets/flat.png";

const messages = [
  { sender: "bot", text: "Hey, nice to meet you! I'm Victoria, a product designer passionate about storytelling and social good!" },
  { sender: "user", text: "Cool! What have you been working on?" },
  { sender: "bot", text: "So many things! What would you like to explore first?" },
];

function ChatHero() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typingSender, setTypingSender] = useState(null);
  const [showReplies, setShowReplies] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
  const timeouts = [];
  let cumulative = 1200;

  messages.forEach((msg, idx) => {
    if (msg.sender === "bot") {
      timeouts.push(setTimeout(() => setTypingSender("bot"), cumulative));
      cumulative += 1000;
      timeouts.push(
        setTimeout(() => {
          setTypingSender(null);
          setVisibleCount(idx + 1);
        }, cumulative)
      );
      cumulative += 1400;
    } else {
      timeouts.push(setTimeout(() => setVisibleCount(idx + 1), cumulative));
      cumulative += 1800;
    }
  });

  timeouts.push(setTimeout(() => setShowReplies(true), cumulative + 300));

  return () => timeouts.forEach(clearTimeout);
}, []);

  const visibleMessages = messages.slice(0, visibleCount);

  return (
    <div className="chat-thread">
      {visibleMessages.map((msg, i) => {
        const showLabel = msg.sender === "bot"
          ? i === 0
          : i === 0 || visibleMessages[i - 1].sender !== msg.sender;
        const isLastInGroup =
          i === visibleMessages.length - 1 || visibleMessages[i + 1]?.sender !== msg.sender;

        return (
          <div key={i} className={`chat-row chat-row-${msg.sender}`}>
            {showLabel && (
              <span className="chat-sender-label">
                {msg.sender === "bot" ? "Victoria Chen" : "You"}
              </span>
            )}
            <div className="chat-bubble-line">
              {msg.sender === "bot" && (
                <img
                  src={flat}
                  alt=""
                  className="chat-avatar"
                  style={{ visibility: isLastInGroup ? "visible" : "hidden" }}
                />
              )}
              <div className={`chat-bubble chat-bubble-${msg.sender} chat-slide-${msg.sender}`}>
                {msg.text}
              </div>
            </div>
          </div>
        );
      })}

      {typingSender === "bot" && (
        <div className="chat-row chat-row-bot">
          <div className="chat-bubble-line">
            <img src={flat} alt="" className="chat-avatar" />
            <div className="chat-bubble chat-bubble-bot chat-typing">
              <span className="chat-dot"></span>
              <span className="chat-dot"></span>
              <span className="chat-dot"></span>
            </div>
          </div>
        </div>
      )}

      {showReplies && (
        <div className="chat-quick-replies">
          <Link to="/casestudies" className="chat-reply-pill">i. Case Studies</Link>
          <Link to="/about" className="chat-reply-pill">ii. About Me</Link>
          <a href="#more-about-me"
          className="chat-reply-pill"
            onClick={(e) => {
            e.preventDefault();
            document.getElementById("more-about-me")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          iii. A bit of both!
        </a>
        </div>
      )}
    </div>
  );
}

function Hero() {
  useEffect(() => {
    const moreAbout = document.querySelector('.more-about-me');
    if (!moreAbout) return;

    const observerMore = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observerMore.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observerMore.observe(moreAbout);
    return () => observerMore.disconnect();
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-cards-row">

          {/* LEFT CARD — info (unchanged) */}
          <div className="hero-card info-card">
            <div className="headshot-row">
              <div className="headshot-credentials">
                <div className="status-pill">
                  <span className="status-dot"></span>
                  Seeking Summer '27 Internships!
                </div>
                <div className="hero-plants">
              <img src={one} alt="Plant stage 1" />
              <img src={two} alt="Plant stage 2" />
              <img src={three} alt="Plant stage 3" />
              <img src={four} alt="Plant stage 4" />
            </div>
                <p className="name-line"><span className="bold">Hi! I'm Victoria Chen.</span></p>
                <p className="credentials-line">UX/Product Designer ✧ Psych + Stats @Harvard</p>
              </div>
            </div>

            <h2>
              I turn stories into whimsical experiences that keep people <span className="colorchangebold">coming back for more</span>.
            </h2>

            <div className="hero-buttons">
              <a href="https://drive.google.com/file/d/1eju-nxiTRaRhZURQy0B-LE3d0OkLjA3x/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className="hero-button">Resumé</button>
              </a>
              <a href="https://www.linkedin.com/in/2028victoria-chen/" target="_blank" rel="noopener noreferrer">
                <button className="hero-button">LinkedIn</button>
              </a>
            </div>
          </div>

          {/* RIGHT CARD — chat (replaces bento) */}
          <div className="hero-card chat-card">
            <ChatHero />
          </div>

        </div>
      </section>

      <section className="more-about-me" id="more-about-me">
        <div className="wavy-line-container">
          <svg className="wavy-line" viewBox="0 0 1200 50" preserveAspectRatio="none">
            <path
              d="M0 25 Q 25 0 50 25 T 100 25 T 150 25 T 200 25 T 250 25 T 300 25 T 350 25 T 400 25 T 450 25 T 500 25 T 550 25 T 600 25 T 650 25 T 700 25 T 750 25 T 800 25 T 850 25 T 900 25 T 950 25 T 1000 25 T 1050 25 T 1100 25 T 1150 25 T 1200 25"
              fill="transparent"
              stroke="#fce4ec"
              strokeWidth="4"
            />
          </svg>
        </div>
      </section>
    </>
  );
}

export default Hero;