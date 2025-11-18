import React from 'react';

const ProcessStep = ({ number, title, description }) => {
  return (
    <div className="process-step reveal">
      <div className="step-number">{number}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProcessStep;