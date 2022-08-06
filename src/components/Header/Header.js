import Link from 'next/link';
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, ResumeLink } from './HeaderStyles';


const Header = () =>  {


  return (
  <div>
    <Container>
      <Div1>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20px', marginRight: '20px' }}>
            <DiCssdeck size='3rem' /> <Span>Portfolio</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <NavLink>Contact</NavLink>
          </Link>
        </li>
        <li>
          <ResumeLink>
          <a href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:857a38ff-e6b9-4c8b-959e-8935ac98231e"
          target="_blank">
          Resume
          </a>
          </ResumeLink> 
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/mikeydgithub">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/michael-diamond-a704a9168/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/mikexcpt/">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </Div3>
        </Container>
  </div>
  )
};

export default Header;
