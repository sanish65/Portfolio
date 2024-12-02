import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ExperienceContainer = styled.section`
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.background}; // Use theme background
  max-width: 100%;
  margin-top: 100px; // Adjust space from top for sticky button
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

const Job = styled.div`
  margin-bottom: 2rem;
  background: ${({ theme }) =>
    theme.background === "#121212" ? "#333" : "#fff"}; // Set background based on dark mode
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const JobTitle = styled.h3`
  font-size: 1.4rem;
  margin: 0.5rem 0;
`;

const Company = styled.p`
  font-size: 1.1rem;
  font-style: italic;
  color: ${({ theme }) => (theme.text === "#ffffff" ? "#ddd" : "#666")}; // Light text in dark mode
`;

const Duration = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => (theme.text === "#ffffff" ? "#bbb" : "#888")}; // Lighter color for dark mode
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const DescriptionCard = styled(motion.div)`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) =>
    theme.background === "#121212" ? "#444" : "#f5f5f5"};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  padding: 1rem;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  &.expanded {
    width: 100%;
    height: auto;
    white-space: normal;
    overflow: auto; // Add scroll when content expands
    padding: 1rem;
  }
`;

const DescriptionText = styled.p`
  font-size: 0.9rem;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; // Show only 3 lines (can adjust based on design)
  -webkit-box-orient: vertical;
  line-height: 1.2rem;
`;

const Experience: React.FC = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(
    null
  );

  const toggleCardExpansion = (jobIndex: number, taskIndex: number) => {
    const index = `${jobIndex}-${taskIndex}`;
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  const experiences = [
    {
      title: "Internship",
      company: "OneStep Solution, Baneswhor - NodeJS Developer",
      duration: "July 1st 2020 - October 30th 2021 (intern to full timer)",
      description: [
        "web-development respective to E-commerce, Inventory-Management System, Booking System.",
        "Dealt with creative ideas respective to other projects running within the company.",
        "Focused on design-to-website conversion and logical presentation.",
        "Internship in Visva Technikos, as a sister organization.",
        "Worked with stacks like Node.js with Express.js, JavaScript, React, and Pug.js as a template engine.",
        "Handled MongoDB database and Digital Ocean deployment.",
        "Created and maintained Dockerized environments.",
      ],
    },
    {
      title: "Backend Developer",
      company: "Outside Tech, Jhamsikhel - NodeJS Developer",
      duration: "November 1st 2021 - March 30th 2024",
      description: [
        "Worked in Node with Next Js (CQRS) – MAJOR contributions.",
        "Contributed on tasks assigned in React with Nest Js and Redux/reducer for state management – Minor level contributions.",
        "Write SQL in PostgreSQL and manage and deploy contents in Google Cloud Platform.",
        "Configured Docker setup and have detailed understanding of how CICD pipeline works (although not directly worked on it).",
        "Projects are maintained in TypeScript.",
        "Knowledge gained regarding APIs, their access, and usage.",
        "Worked on tasks related to the event-driven approach in Google Pub/Sub.",
        "Tasks related to the formulation of logic and debugging identified bugs.",
        "Participation in Agile-based sprint plans, retrospectives, reviews, and workdays.",
        "Worked with services like Sendgrid, Auth0, Google Cloud Platform, and Github.",
        "Convenient with project management tools like JIRA, Bugherd.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Heubert Teach, Maitidevi - ReactJs/NodeJS Developer",
      duration: "April 1st 2024 - ongoing",
      description: [
        "Particularly contributed int he react UI development",
        "Design to FE UI",
        "Maintain Clean codes and optimization as far as possible",
        "Worked in NESTJS, REACTJS, POSTGRESQL"
      ],
    },
  ];

  return (
    <ExperienceContainer>
      <Title>Experience</Title>
      {experiences.map((job, jobIndex) => (
        <Job key={jobIndex}>
          <JobTitle>{job.title}</JobTitle>
          <Company>{job.company}</Company>
          <Duration>{job.duration}</Duration>
          <DescriptionContainer>
            {job.description.map((task, taskIndex) => (
              <DescriptionCard
                key={taskIndex}
                onClick={() => toggleCardExpansion(jobIndex, taskIndex)}
                className={
                  expandedCardIndex === `${jobIndex}-${taskIndex}`
                    ? "expanded"
                    : ""
                }
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                layout
              >
                <DescriptionText>
                  {expandedCardIndex === `${jobIndex}-${taskIndex}`
                    ? task
                    : task.substring(0, 50) + "..."}
                </DescriptionText>
              </DescriptionCard>
            ))}
          </DescriptionContainer>
        </Job>
      ))}
    </ExperienceContainer>
  );
};

export default Experience;
