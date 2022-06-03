import React, { useState } from 'react';

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer, ContactContainer } from './FooterStyles';


const Footer = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
          setFormState({ [e.target.name]: e.target.value });
          console.log('Form', formState);
        }
    };

    // add validation to the handleChange function
    function handleChange(e) {
        // target email 
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.legnth) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    }
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel: 954-295-9085">954-295-9085</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:ampgzo2@gmail.com">ampgzo2@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/mikeydgithub">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/michael-diamond-a704a9168/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
      <ContactContainer>
      <section>
            <h1 data-testid="h1tag">Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name"/>    
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"/>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="button" type="submit">Submit</button>
            </form>
        </section>
      </ContactContainer>
    </FooterWrapper>
  );
};

export default Footer;
