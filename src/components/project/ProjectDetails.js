import React from "react";

export const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            minus fuga iste nam aut nesciunt molestiae, reprehenderit mollitia
            rem temporibus recusandae officia veritatis dolores similique
            consequuntur harum dolorum asperiores eveniet.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Vaihav</div>
          <div>{new Date().toDateString()}</div>
        </div>
      </div>
    </div>
  );
};
