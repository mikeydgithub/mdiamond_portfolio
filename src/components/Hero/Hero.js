import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Portfolio <br />
        Mike Diamond
      </SectionTitle>
      <SectionText>
        A motive and aspiring developer looking to expand on my skills and knowledge of learning.
      </SectionText>
      <Button onClick={() => window.location = '//https:google.com' }>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;