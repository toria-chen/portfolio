import { useState, useEffect } from 'react';
import myname from '../assets/myname.png';
import prodesign from '../assets/prodesign.png';
import storytelling from '../assets/storytelling.png';
import illustrating from '../assets/illustrating.png';
import moi from '../assets/moi.png';

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
      <img src={moi} alt="Victoria Chen illustration" className="intro-headshot" />

      <img src={myname} alt="Victoria Chen" className="intro-name-img" />

      <div className={`character-intro ${isExiting ? 'fade-out' : ''}`}>
  <img src={moi} alt="Victoria Chen illustration" className="intro-headshot" />
  <img src={myname} alt="Victoria Chen" className="intro-name-img" />

  <img src={prodesign} alt="Product Designer" className="intro-role-img role-1" style={{ animationDelay: '1.5s' }} />
  <img src={storytelling} alt="Storyteller" className="intro-role-img role-2" style={{ animationDelay: '2s' }} />
  <img src={illustrating} alt="Digital Illustrator" className="intro-role-img role-3" style={{ animationDelay: '2.5s' }} />
</div>
    </div>
  );
}

export default SearchLanding;