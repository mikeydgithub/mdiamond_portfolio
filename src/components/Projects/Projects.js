import React from 'react';
import Link from 'next/link';
import { BlogCard, CardInfo,  GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, SocialIcons, ExternalLinks } from './ProjectsStyles';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants'
import { AiFillGithub} from 'react-icons/ai';
import { IoIosGlobe } from 'react-icons/io';




const Projects = () => (
  <Section nopadding id="projects">
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, website, tags, gitHub }) => (
        <BlogCard key={id}>
          <ExternalLinks>
            <Img src={image}/>
          </ExternalLinks>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>

          <div>

            <TitleContent>Stack</TitleContent>

            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>

            <SocialIcons>
            <Link href={gitHub}>
              <AiFillGithub size="3rem" />
            </Link>
            </SocialIcons>

            <SocialIcons>
            <Link href={website}>
              <IoIosGlobe size="3rem" />
            </Link>
            </SocialIcons>

          </div>
          <UtilityList>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;