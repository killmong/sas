import React, { useState } from "react";
import './Articles.css'; // Import CSS for styling

const Articles = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggles the expansion on click
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`article-card ${isExpanded ? "expanded" : ""}`}
      onClick={toggleExpand}
    >
      <h3 className="article-title">{title}</h3>
      {isExpanded && <p className="article-content">{content}</p>}
    </div>
  );
};

export default Articles;
