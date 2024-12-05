import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import pp from '../../src/assets/pp.jpg'

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid #007bff;
  margin-bottom: 1rem;
`;

const Bio = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 2rem;
  z-index: 1;

`;

const DetailsContainer = styled.section`
  padding: 2rem 1rem;
  background-color: transparent;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

const Skill = styled.li`
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const Contact = styled.div`
  margin-top: 2rem;
`;

const ContactItem = styled.p`
  font-size: 1rem;
  color: #555;
`;

const KeywordsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden;
  background-color: #000;
`;

const Keyword = styled(motion.div)`
  position: absolute;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
`;

const PersonalDetails: React.FC = () => {
  const skills = ['React', 'TypeScript', 'JavaScript', 'CSS', 'Node.js', 'Python'];
  const bio = 'Hey! I am Sanish Maharjan. I am a Software Engineer.';

  const keywords = [
    'function', 'const', 'let', 'var', 'return', 'class', 'if', 'else',
    'switch', 'case', 'default', 'import', 'export', 'async', 'await',
    'for', 'while', 'do', 'break', 'continue', 'try', 'catch', 'finally',
    'throw', 'new', 'this', 'typeof', 'instanceof', 'debugger',
  ];

  const animatedKeywords = Array.from({ length: 30 }).map((_, index) => {
    const keyword = keywords[Math.floor(Math.random() * keywords.length)];
    const size = Math.random() * 1.5 + 0.8; 
    const startX = Math.random() * 100; 
    const startY = Math.random() * 100; 
    const duration = Math.random() * 10 + 5; 

    return (
      <Keyword
        key={index}
        style={{
          top: `${startY}%`,
          left: `${startX}%`,
          fontSize: `${size}rem`,
        }}
        animate={{
          x: [
            `${startX}%`,
            `${startX + (Math.random() > 0.5 ? Math.random() * 50 : -Math.random() * 50)}vw`,
          ],
          y: [
            `${startY}%`,
            `${startY + (Math.random() > 0.5 ? Math.random() * 50 : -Math.random() * 50)}%`,
          ],
          scale: [
            1, 
            2,
          ],
        }}
        transition={{
          duration, 
          repeat: Infinity, 
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      >
        {keyword}
      </Keyword>
    );
  });

  return (
    <DetailsContainer>
      <KeywordsContainer>{animatedKeywords}</KeywordsContainer>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ProfilePicture src={pp} alt="Profile" />
      </motion.div>
      <Title>About Me</Title>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Bio style={{ font: '30px', color: 'white' }}>{bio}</Bio>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SkillsList>
          {skills.map((skill, index) => (
            <Skill key={index}>{skill}</Skill>
          ))}
        </SkillsList>
      </motion.div>
      <Contact>
        <ContactItem>Email: sanishmaharjan65@gmail.com</ContactItem>
        <ContactItem>Phone: +977 9843602612</ContactItem>
      </Contact>
    </DetailsContainer>
  );
};

export default PersonalDetails;
