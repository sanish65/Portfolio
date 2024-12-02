import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem;
  text-align: center;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: white;
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  color: #bbb;
  margin-top: 1rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </FooterLink>
        <FooterLink href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          GitHub
        </FooterLink>
        <FooterLink href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
          Twitter
        </FooterLink>
      </FooterLinks>
      <FooterText>&copy; 2024 Your Name. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
