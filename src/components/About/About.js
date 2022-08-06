import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';




const About = () => {

  return (
    
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>Recent University of Central Florida Bootcamp graduate. Looking to utilize and develop my skills of full stack web developer and IT experince.</SectionText>
      <div>
      <img src="https://user-images.githubusercontent.com/94988620/172021796-ff385b2a-1191-44d6-9e34-653a2b8e7dd9.png"></img>
      </div>
    </Section>
  );
};

export default About;
