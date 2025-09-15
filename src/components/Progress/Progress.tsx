import React from 'react';

const Progress: React.FC = () => {
  return (
    <div className="progress-page">
      <div className="page-header mb-4">
        <h1 className="h2">
          📈 Progress Analytics
        </h1>
        <p className="text-muted">
          Detailed tracking and analytics of your learning journey
        </p>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h5>Learning Analytics</h5>
              <div className="progress-actions">
                <button className="btn btn-primary btn-sm me-2">
                  📖 Log Session
                </button>
                <button className="btn btn-outline-primary btn-sm">
                  📊 Weekly Report
                </button>
              </div>
            </div>
            <div className="card-body">
              <p className="text-muted">Progress tracking and analytics dashboard coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;