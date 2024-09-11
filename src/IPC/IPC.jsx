import React, { useState } from "react";
import './IPC.css'; // Import CSS for styling

const IPC = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // IPC sections content array
  const ipcSections = [
    {
      title: "Section 1 - Title and Extent of Operation of the Code",
      content: "This Act shall be called the Indian Penal Code and shall extend to the whole of India except the State of Jammu and Kashmir. It provides the foundation for the penal law system in India.",
    },
    {
      title: "Section 2 - Punishment for Offenses within India",
      content: "Every person shall be liable to punishment under this Code for every act or omission contrary to the provisions thereof, of which he shall be guilty within India. This defines the extent of punishment for actions within Indian territories.",
    },
    {
      title: "Section 3 - Punishment for Offenses Committed Beyond India",
      content: "Any person liable, by any Indian law, to be tried for an offense committed beyond India shall be dealt with according to the provisions of this Code for any act committed beyond India in the same manner as if such act had been committed within India.",
    },
    {
      title: "Section 4 - Extension of Code to Extra-Territorial Offenses",
      content: "The provisions of this Code apply to any offense committed by any citizen of India in any place without and beyond India, on any ship or aircraft registered in India. This extends Indian jurisdiction to specific cases outside India.",
    },
  ];

  // Toggles the expansion of a specific IPC section
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Collapse if already expanded
  };

  return (
    <div>
      {ipcSections.map((section, index) => (
        <div
          key={index}
          className={`ipc-card ${expandedIndex === index ? "expanded" : ""}`}
          onClick={() => toggleExpand(index)}
        >
          <h3 className="ipc-title">{section.title}</h3>
          {expandedIndex === index && <p className="ipc-content">{section.content}</p>}
        </div>
      ))}
    </div>
  );
};

export default IPC;
