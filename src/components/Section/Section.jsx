import React from 'react';
import './Section.css';

const Section = ({ id, title, content }) => {
  return (
    <article id={id} className="page-section">
      <h3>{title}</h3>
      <p>{content}</p>
    </article>
  );
};

export default Section;
