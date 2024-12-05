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
        <FooterLink href="https://www.linkedin.com/in/sanish-maharjan-9a71551b7/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </FooterLink>
        <FooterLink href="https://github.com/sanish65" target="_blank" rel="noopener noreferrer">
          GitHub
        </FooterLink>
      </FooterLinks>
      <FooterText>Thanks for visiting me!</FooterText>
    </FooterContainer>
  );
};

export default Footer;
