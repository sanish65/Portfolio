import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header`
  text-align: center;
  padding: 2rem 1rem;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: 2rem;
  margin: 0.5rem 0;
`;

const Tagline = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <ProfileImage src="/profile.jpg" alt="Profile" />
        <Name>Your Name</Name>
        <Tagline>Your tagline or short description</Tagline>
      </motion.div>
    </HeaderContainer>
  );
};

export default Header;
