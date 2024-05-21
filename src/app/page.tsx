import HighlightedProjects from '../components/hero/highlightedProjects';

import HeroPortfolio from '@/src/components/hero/heroPortfolio';

export default function Home() {
  return (
    <div className='px-4 md:px-6 container'>
      <HeroPortfolio />
      <HighlightedProjects />
    </div>
  );
}
