import { useState, useEffect } from 'react';
import myname from '../assets/myname.webp';
import prodesign from '../assets/prodesign.webp';
import storytelling from '../assets/storytelling.webp';
import illustrating from '../assets/illustrating.webp';
import plain from '../assets/plain.webp';

function SearchLanding({ onSearch }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onSearch, 600);
    }, 5000);

    return () => clearTimeout(exitTimer);
  }, [onSearch]);

  return (
    <div className={`character-intro ${isExiting ? 'fade-out' : ''}`}>
      <img src={plain} alt="Victoria Chen illustration" className="intro-headshot" />

      <img src={myname} alt="Victoria Chen" className="intro-name-img" />

      <div className={`character-intro ${isExiting ? 'fade-out' : ''}`}>
  <img src={plain} alt="Victoria Chen illustration" className="intro-headshot" />
  <img src={myname} alt="Victoria Chen" className="intro-name-img" />

  <img src={illustrating} alt="Digital Illustrator" className="intro-role-img role-1" style={{ animationDelay: '1.5s' }} />
  <img src={prodesign} alt="Product Designer" className="intro-role-img role-2" style={{ animationDelay: '2s' }} />
  <img src={storytelling} alt="Storyteller" className="intro-role-img role-3" style={{ animationDelay: '2.5s' }} />
</div>
    </div>
  );
}

export default SearchLanding;