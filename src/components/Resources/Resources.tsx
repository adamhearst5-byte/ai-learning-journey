import React from 'react';

const Resources: React.FC = () => {
  return (
    <div className="resources-page">
      <div className="page-header mb-4">
        <h1 className="h2">
          📚 Learning Resources
        </h1>
        <p className="text-muted">
          Curated collection of 50+ learning materials organized by quarter
        </p>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h5>Resource Library</h5>
              <div className="search-controls">
                <button className="btn btn-outline-primary btn-sm me-2">
                  🔽 Filter
                </button>
                <button className="btn btn-outline-primary btn-sm">
                  🔍 Search
                </button>
              </div>
            </div>
            <div className="card-body">
              <p className="text-muted">Comprehensive resource database coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;