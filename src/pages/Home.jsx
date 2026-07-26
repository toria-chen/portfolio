import { useState } from 'react';
import SearchLanding from '../components/SearchLanding';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

function Home() {
  const [showPortfolio, setShowPortfolio] = useState(() => {
    return sessionStorage.getItem('hasSeenLanding') === 'true';
  });

  const handleSearchComplete = () => {
    sessionStorage.setItem('hasSeenLanding', 'true');
    setShowPortfolio(true);
  };

  if (!showPortfolio) {
    return <SearchLanding onSearch={handleSearchComplete} />;
  }

  return (
    <>
      <Hero />
      <Projects />
    </>
  );
}

export default Home;
