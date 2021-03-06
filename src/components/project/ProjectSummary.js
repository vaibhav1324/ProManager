import React from "react";

export const ProjectSummary = () => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">Project Title</span>
        <p>Posted by Vaibhav</p>
        <p className="grey-text">{new Date().toDateString()}</p>
      </div>
    </div>
  );
};
