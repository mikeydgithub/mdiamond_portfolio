import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';




const About = () => {

  return (
    
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>Full-Stack Web developer leveraging a rich background in leadership in healthcare and IT related experiences to build more intuitive user experiences on the web. Recently earned a certificate from the University of Central Florida and developed skills using HTML, CSS, JavaScript, Node, MySQL, MongoDB, GitHub, Heroku, React, and various other languages and libraries.  Possesses strong agility for learning, problem-solving, dedication to teamwork, adapting to challenges, and working on new projects. Uses developer expertise for analysis, design, implementation, testing, deployment, and maintenance of code.  Excited to continue to grow and learn new languages such as Python, Ruby, Angular, C#, and Microsoft .NET framework. Looking to bring keen attention to detail and technical skills to a company to grow and become a valuable asset.</SectionText>
      <div>
      <img src="https://user-images.githubusercontent.com/94988620/172021796-ff385b2a-1191-44d6-9e34-653a2b8e7dd9.png"></img>
      </div>
    </Section>
  );
};

export default About;
