import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="projects-page">
      <div className="page-header mb-4">
        <h1 className="h2">
          🚀 AI Projects
        </h1>
        <p className="text-muted">
          10 hands-on projects with GitHub templates and detailed guides
        </p>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h5>Project Portfolio</h5>
              <div className="project-actions">
                <button className="btn btn-primary btn-sm me-2">
                  💻 Start Project
                </button>
                <button className="btn btn-outline-primary btn-sm">
                  📄 Templates
                </button>
              </div>
            </div>
            <div className="card-body">
              <p className="text-muted">Project gallery and management system coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;