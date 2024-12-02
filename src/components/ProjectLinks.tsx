import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const LinksWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme?.primaryText || "#000"};
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

const CardImage = styled.div`
  width: 100%;
  height: 150px;
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid #ddd;
`;

const CardContent = styled.div`
  padding: 1rem;
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme?.secondaryText || "#555"};
`;

const ProjectLinks: React.FC = () => {
  const links = [
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with React and TypeScript.",
      image: "https://via.placeholder.com/300x150", // Replace with an actual screenshot
      link: "https://github.com/yourusername/portfolio-website",
    },
    {
      title: "E-Commerce Platform",
      description: "An e-commerce app built with Next.js and TailwindCSS.",
      image: "https://via.placeholder.com/300x150", // Replace with an actual screenshot
      link: "https://github.com/yourusername/ecommerce-platform",
    },
    {
      title: "Blog CMS",
      description: "A content management system for blogs using Node.js.",
      image: "https://via.placeholder.com/300x150", // Replace with an actual screenshot
      link: "https://github.com/yourusername/blog-cms",
    },
    {
        title: "Blog CMS",
        description: "A content management system for blogs using Node.js.",
        image: "https://via.placeholder.com/300x150", // Replace with an actual screenshot
        link: "https://github.com/yourusername/blog-cms",
      },
      {
        title: "Blog CMS",
        description: "A content management system for blogs using Node.js.",
        image: "https://via.placeholder.com/300x150", // Replace with an actual screenshot
        link: "https://github.com/yourusername/blog-cms",
      },
      {
        title: "Blog CMS",
        description: "A content management system for blogs using Node.js.",
        image: "https://via.placeholder.com/300x150", // Replace with an actual screenshot
        link: "https://github.com/yourusername/blog-cms",
      },
    // Add more links here
  ];

  return (
    <LinksWrapper>
      <SectionTitle>My Projects</SectionTitle>
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
            <CardImage
              style={{
                backgroundImage: `url(${link.image})`,
              }}
            />
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
