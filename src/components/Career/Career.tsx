import React from 'react';

const Career: React.FC = () => {
  return (
    <div className="career-page">
      <div className="page-header mb-4">
        <h1 className="h2">
          🧳 Career Hub
        </h1>
        <p className="text-muted">
          Job search tools, networking opportunities, and career preparation for the UK market
        </p>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h5>Career Development</h5>
              <div className="career-actions">
                <button className="btn btn-primary btn-sm me-2">
                  🔍 Job Search
                </button>
                <button className="btn btn-outline-primary btn-sm">
                  🌐 Networking
                </button>
              </div>
            </div>
            <div className="card-body">
              <p className="text-muted">Career tools and job tracking system coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;