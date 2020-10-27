import React, { useState } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectAction";

const CreateProject = ({createProject}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div className="container" style={{ maxWidth: 500 }}>
      <form onSubmit={(e) => {
          e.preventDefault()
          createProject({title,content})}} className="white">
        <h5 className="grey-text text-darken-3">Create New Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => {
              e.preventDefault();
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="input-field">
          <label htmlFor="content">Content</label>
          <textarea
            className="materialize-textarea"
            id="content"
            value={content}
            onChange={(e) => {
              e.preventDefault();
              setContent(e.target.value);
            }}
          />
        </div>
        <div className="input-field">
          <button className="pink btn lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(null,mapDispatchToProps)(CreateProject);
