import { unstable_setRequestLocale } from 'next-intl/server';

import HeroPortfolio from '@/src/components/hero/heroPortfolio';
import HighlightedProjects from '@/src/components/hero/highlightedProjects';
import Container from '@/src/components/ui/container';

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
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
