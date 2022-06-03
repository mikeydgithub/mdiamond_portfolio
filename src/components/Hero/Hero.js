import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Portfolio <br />
        Mike Diamond
      </SectionTitle>
      <SectionText>
        A motivated and aspiring developer looking to expand on my skills and knowledge of learning.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;