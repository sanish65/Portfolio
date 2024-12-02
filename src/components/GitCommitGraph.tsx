import React from "react";
import GitHubCalendar from "react-github-calendar";
import styled from "styled-components";

const SectionWrapper = styled.div`
  padding: 2rem;
  background-color: #1f1f1f;
  color: #fff;
  text-align: center;
  border-radius: 16px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #ff9e2a;
`;

const GraphWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GitCommitGraph: React.FC = () => {
  return (
    <SectionWrapper>
      <Title>GitHub Contributions</Title>
      <GraphWrapper>
        <GitHubCalendar username={import.meta.env.VITE_GITHUB_USERNAME} color="#ff4e50" />
      </GraphWrapper>
    </SectionWrapper>
  );
};

export default GitCommitGraph;
