import HighlightedProjects from '../../components/hero/highlightedProjects';
import Container from '../../components/ui/container';

import HeroPortfolio from '@/src/components/hero/heroPortfolio';

interface Props {
  params: { locale: string };
}
export default function Home({ params: { locale } }: Props) {
  return (
    <>
      <Container>
        <HeroPortfolio locale={locale} />
        <HighlightedProjects locale={locale} />
      </Container>
    </>
  );
}
