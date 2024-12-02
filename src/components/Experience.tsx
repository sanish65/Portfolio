import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceContainer = styled.section`
  padding: 2rem 1rem;
  background-color: #f8f9fa;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

const Job = styled.div`
  margin-bottom: 1.5rem;
`;

const JobTitle = styled.h3`
  font-size: 1.4rem;
  margin: 0.5rem 0;
`;

const Company = styled.p`
  font-size: 1.1rem;
  font-style: italic;
  color: #666;
`;

const Duration = styled.p`
  font-size: 1rem;
  color: #888;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #333;
`;

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'XYZ Company',
      duration: 'Jan 2023 - Present',
      description: 'Developed and maintained modern, responsive web applications.',
    },
    {
      title: 'Software Intern',
      company: 'ABC Tech',
      duration: 'Jun 2022 - Dec 2022',
      description: 'Collaborated with a team to design and implement a CRM tool.',
    },
  ];

  return (
    <ExperienceContainer>
      <Title>Experience</Title>
      {experiences.map((job, index) => (
      <motion.div
      key={index}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
    >
      <Job>
        <JobTitle>{job.title}</JobTitle>
        <Company>{job.company}</Company>
        <Duration>{job.duration}</Duration>
        <Description>{job.description}</Description>
      </Job>
    </motion.div>
    
      ))}
    </ExperienceContainer>
  );
};

export default Experience;
