import React from 'react';

const Certifications: React.FC = () => {
  return (
    <div className="certifications-page">
      <div className="page-header mb-4">
        <h1 className="h2">
          🏆 Certifications
        </h1>
        <p className="text-muted">
          Professional certification path with study plans and progress tracking
        </p>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h5>Certification Roadmap</h5>
              <div className="cert-actions">
                <button className="btn btn-primary btn-sm me-2">
                  📅 Schedule Exam
                </button>
                <button className="btn btn-outline-primary btn-sm">
                  🏅 My Certs
                </button>
              </div>
            </div>
            <div className="card-body">
              <p className="text-muted">Certification tracking and study plans coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;