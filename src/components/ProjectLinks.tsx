import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const LinksWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
`;

const Card = styled(motion.a)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  background: ${({ theme }) => theme?.cardBackground || "#fff"};
  color: ${({ theme }) => theme?.primaryText || "#000"};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

// const CardImage = styled.div`
//   width: 100%;
//   height: 150px;
//   background-size: cover;
//   background-position: center;
//   border-bottom: 1px solid #ddd;
// `;

const CardContent = styled.div`
  padding: 1rem;
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme?.secondaryText || "#555"};
`;

const ProjectLinks: React.FC = () => {
  const links = [
    {
      title: "Nestjs CQRS Pattern",
      description: "A college project for bookiing system",
      image: "https://via.placeholder.com/300x150", // Replace with an actual screenshot
      link: "https://github.com/sanish65/nestjs-cqrs-typeorm-postgres",
    },
    {
      title: "Data Tracker",
      description: "My attempt to track covid data worldwide using open API.",
      image: "https://via.placeholder.com/300x150", // Replace with an actual screenshot
      link: " https://github.com/sanish65/covidReact.git",
    },
    {
      title: "Vending Machine",
      description: "A cending machine like interface to do CRUDs",
      image: "https://via.placeholder.com/300x150", // Replace with an actual screenshot
      link: " https://github.com/sanish65/vending_machine-Mern_typescript",
    },
    {
      title: "A Booking UI",
      description: "Abooking management system in React",
      image: "https://via.placeholder.com/300x150", // Replace with an actual screenshot
      link: "https://github.com/sanish65/hotelBookingUI",
    },
    {
      title: "Expense tracker",
      description: "A small money managemnt tool using PHP.",
      image: "https://via.placeholder.com/300x150", // Replace with an actual screenshot
      link: "https://github.com/sanish65/MisProj",
    },
    {
      title: "Snooker time slot booking",
      description: "A college project for bookiing system",
      image: "https://via.placeholder.com/300x150", // Replace with an actual screenshot
      link: "https://github.com/sanish65/SummerProject.git",
    },
    {
      title: "Youtube clone",
      description: "Build in React to use Youtube API's video data",
      image: "https://via.placeholder.com/300x150", // Replace with an actual screenshot
      link: "https://github.com/sanish65/youtube_clone",
    },
    {
      title: "Portfolio",
      description: "A React made portfolio project",
      image: "https://via.placeholder.com/300x150", // Replace with an actual screenshot
      link: "https://github.com/sanish65/Portfolio",
    },
  ];

  return (
    <LinksWrapper>
      <Title>My Projects</Title>
      <CardGrid>
        {links.map((link, index) => (
          <Card
            key={index}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* <CardImage
              style={{
                backgroundImage: `url(${link.image})`,
              }}
            /> */}
            <CardContent>
              <CardTitle>{link.title}</CardTitle>
              <CardDescription>{link.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </CardGrid>
    </LinksWrapper>
  );
};

export default ProjectLinks;
