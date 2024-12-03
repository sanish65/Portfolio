import React from "react";

const WebStatsCard: React.FC<{ title: string; description: string; onClick: () => void }> = ({
  title,
  description,
  onClick,
}) => (
  <div onClick={onClick} style={{ border: "1px solid #ccc", padding: "20px", cursor: "pointer" }}>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default WebStatsCard;
