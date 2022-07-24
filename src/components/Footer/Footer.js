// import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
// import { SocialIcons } from '../Header/HeaderStyles';
import { ContactContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle} from './FooterStyles';



const Footer = () => {
  
  return (
    <FooterWrapper id="contact">
      <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel: 954-295-9085">954-295-9085</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:mikediamond334@gmail.com">mikediamond334@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <ContactContainer>
      <section>
        <form className='form' action="https://formsubmit.co/mikediamond334@gmail.com" method="POST">
          <h1>Contact Form</h1>
          <label>Name</label>
          <input type="text" placeholder='Name' required/>
          <label>Email</label>
          <input type="email" placeholder='Email' required/>
          <label>Message</label>
          <input type="text" name="message" placeholder='Message' required/> 
          <button type='submit'>Submit</button>
          <input type="hidden" name="_next" value="https://mdiamond-portfolio.herokuapp.com/"></input>
        </form>
      </section>
      </ContactContainer>
      {/* <SocialIconsContainer>
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
      </SocialIconsContainer> */}
    </FooterWrapper>
  );
};

export default Footer;
