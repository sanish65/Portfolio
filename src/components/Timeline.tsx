import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const TimelineLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, #2193b0, #6dd5ed);
`;

const TimelineEvent = styled(motion.div)`
  position: relative;
  margin: 20px 0;
  padding: 20px;
  width: 300px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    top: 20px;
    left: -12px;
    width: 24px;
    height: 24px;
    background: #6dd5ed;
    border: 3px solid #ffffff;
    border-radius: 50%;
    z-index: 1;
  }

  &:nth-child(even) {
    align-self: flex-end;
    &:before {
      left: auto;
      right: -12px;
    }
  }

  &:hover {
    background: #f0f8ff;
    transform: scale(1.05);
    transition: 0.3s ease;
  }
`;

const EventTitle = styled.h3`
  margin: 0 0 10px;
  color: #333;
`;

const EventDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 10px 0;
  padding: 10px;
  background: #eaf6ff;
  border-radius: 8px;
`;

const events = [
  { title: "Started Learning React", description: "Began my journey in web development.", id: 1 },
  { title: "Created First Portfolio", description: "Showcased my projects.", id: 2 },
  { title: "Learned TypeScript", description: "Improved my code quality.", id: 3 },
  { title: "Built a Timeline Component", description: "Integrated animations in React.", id: 4 },
];

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  return (
    <TimelineContainer>
      <TimelineLine />
      {events.map((event, index) => (
        <TimelineEvent
          key={event.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)} // Toggle on click
          onMouseEnter={() => setSelectedEvent(event.id)} // Show on hover
          onMouseLeave={() => setSelectedEvent(null)} // Hide on hover out
        >
          <EventTitle>{event.title}</EventTitle>
          {selectedEvent === event.id && (
            <EventDescription>{event.description}</EventDescription>
          )}
        </TimelineEvent>
      ))}
    </TimelineContainer>
  );
};

export default Timeline;
