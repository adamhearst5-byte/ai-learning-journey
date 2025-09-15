import React from 'react';

const Timeline: React.FC = () => {
  return (
    <div className="timeline-page">
      <div className="page-header mb-4">
        <h1 className="h2">
          📅 12-Month Learning Timeline
        </h1>
        <p className="text-muted">
          Your structured path from September 2025 to September 2026
        </p>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5>Timeline Overview</h5>
            </div>
            <div className="card-body">
              <div className="timeline-quarters">
                {[1, 2, 3, 4].map(quarter => (
                  <div key={quarter} className="quarter-card p-3 mb-3 bg-light rounded">
                    <h6>Quarter {quarter}</h6>
                    <p className="text-muted">Coming soon...</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;