import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Styled components
const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, #ff9e2a, #ff4e50);
  color: #fff;
  border-radius: 16px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const EducationCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
  }
`;

const Institution = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem 0;
  color: #fff;
`;

const Degree = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0.5rem 0;
  color: #ffefc1;
`;

const Duration = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
  color: #ffe8a1;
`;

const Description = styled.p`
  font-size: 0.9rem;
  margin-top: 1rem;
  color: #fff;
`;

const AnimatedLine = styled(motion.div)`
  width: 100%;
  height: 2px;
  background: #ffe8a1;
  margin: 1rem auto;
`;

const educationData = [
  {
    institution: "University of Awesome",
    degree: "Bachelor of Science in Computer Science",
    duration: "2015 - 2019",
    description: "Graduated with honors and specialized in web development and AI.",
  },
  {
    institution: "Tech Masters Academy",
    degree: "Advanced Diploma in Full-Stack Development",
    duration: "2019 - 2020",
    description: "Built advanced applications using React, Node.js, and PostgreSQL.",
  },
  {
    institution: "Online Courses",
    degree: "Certified in Blockchain and Smart Contracts",
    duration: "2021",
    description: "Completed a hands-on course on decentralized apps and blockchain technologies.",
  },
  {
    institution: "Online Courses",
    degree: "Certified in Blockchain and Smart Contracts",
    duration: "2021",
    description: "Completed a hands-on course on decentralized apps and blockchain technologies.",
  },  {
    institution: "Online Courses",
    degree: "Certified in Blockchain and Smart Contracts",
    duration: "2021",
    description: "Completed a hands-on course on decentralized apps and blockchain technologies.",
  },
];

const EducationSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <SectionWrapper>
      <Title>My Educational Background</Title>
      <AnimatedLine
        initial={{ width: "0%" }}
        animate={{ width: inView ? "50%" : "0%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        ref={ref}
      />
      <CardWrapper>
        {educationData.map((item, index) => (
          <EducationCard
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Institution>{item.institution}</Institution>
            <Degree>{item.degree}</Degree>
            <Duration>{item.duration}</Duration>
            <Description>{item.description}</Description>
          </EducationCard>
        ))}
      </CardWrapper>
    </SectionWrapper>
  );
};

export default EducationSection;
