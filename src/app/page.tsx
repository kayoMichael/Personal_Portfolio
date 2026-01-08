import HighlightedProjects from '../components/hero/highlightedProjects';
import Container from '../components/ui/container';

import HeroPortfolio from '@/src/components/hero/heroPortfolio';

export default function Home() {
  return (
    <>
      <Container>
        <HeroPortfolio />
        <HighlightedProjects project={false} />
        <HighlightedProjects project={true} />
      </Container>
    </>
  );
}
