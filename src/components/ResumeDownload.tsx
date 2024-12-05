import React, { useState } from "react";
import styled from "styled-components";

const ResumeSection = styled.section`
  padding: 3rem 1rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

const ResumeTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const ResumeButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
`;

const ResumeButton = styled.a`
  padding: 0.8rem 2rem;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }
`;

const PreviewModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: opacity 0.3s ease;
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
  max-width: 90%;
  max-height: 80%;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  animation: slideIn 0.5s ease-out;

  @keyframes slideIn {
    0% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0.5rem;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background-color: #e60000;
    transform: scale(1.1);
  }
`;

const PreviewContainer = styled.div`
  width: 800px;
  height: 600px;
  overflow: auto;
  border: none;
`;

const ResumeDownload: React.FC = () => {
  const [showPreview, setShowPreview] = useState(false);
  const resumePath = "/sanish_resume.pdf";

  const togglePreviewModal = () => {
    setShowPreview(!showPreview);
  };

  return (
    <ResumeSection>
      <ResumeTitle>Download or Preview My Resume</ResumeTitle>

      <ResumeButtonContainer>
        <ResumeButton href={resumePath} download>
          Download Resume
        </ResumeButton>

        <ResumeButton onClick={togglePreviewModal}>
          {showPreview ? "Hide Preview" : "Preview Resume"}
        </ResumeButton>
      </ResumeButtonContainer>

      {showPreview && (
        <PreviewModal onClick={togglePreviewModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={togglePreviewModal}>X</CloseButton>
            <PreviewContainer>
              <iframe
                src={resumePath}
                width="100%"
                height="100%"
                title="Resume Preview"
              />
            </PreviewContainer>
          </ModalContent>
        </PreviewModal>
      )}
    </ResumeSection>
  );
};

export default ResumeDownload;
