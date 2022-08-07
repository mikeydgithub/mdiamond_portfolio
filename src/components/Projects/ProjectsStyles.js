import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
  cursor: pointer;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 5rem;
  row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
  }
`;

export const BlogCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 45px;
  &:hover{
  transform: scale(1.05);
  }
  transition: all 0.5s ease;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify-center;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem 
}
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
/* transition: 0.5s;
&:hover{
} */
`;

export const TagList = styled.ul`
display: flex;
padding: 2rem;
margin-left: 5px;
`;

export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`;

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 100px;
padding: 5px;
&:hover {
  background-color: #212d45;
  transform: scale(20);
  cursor: pointer; 
  }
`;