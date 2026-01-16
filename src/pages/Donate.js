import React from 'react';
import './Donate.css';

const Donate = () => {
  const organizations = [
    {
      id: 1,
      name: 'Armed Forces Flag Day Fund',
      description: 'Official fund for the welfare of ex-servicemen and their families.',
      website: 'https://ksb.gov.in',
      verified: true,
      icon: '🇮🇳'
    },
    {
      id: 2,
      name: 'Bharat Ke Veer',
      description: 'Government initiative to support families of martyred soldiers.',
      website: 'https://bharatkeveer.gov.in',
      verified: true,
      icon: '❤️'
    },
    {
      id: 3,
      name: 'Indian Army Welfare Fund',
      description: 'Supports welfare activities for serving and retired army personnel.',
      website: 'https://indianarmy.nic.in',
      verified: true,
      icon: '🎖️'
    },
    {
      id: 4,
      name: 'War Widows Association',
      description: 'Dedicated to supporting widows and families of fallen soldiers.',
      website: 'Contact through official channels',
      verified: true,
      icon: '💐'
    }
  ];

  return (
    <div className="donate-page">
      <div className="container">
        <div className="page-header">
          <h1>Support Our Heroes</h1>
          <p>Help the families of those who sacrificed for the nation</p>
        </div>

        <div className="important-notice card">
          <h2>⚠️ Important Notice</h2>
          <div className="notice-content">
            <p>
              <strong>ShauryaSetu does NOT collect, store, or process any donations.</strong>
            </p>
            <p>
              We only provide awareness about verified government organizations and NGOs 
              that support families of martyred soldiers. All donations should be made 
              directly through official websites or channels.
            </p>
            <p>
              Please verify the authenticity of any organization before making donations.
            </p>
          </div>
        </div>

        <div className="organizations-section">
          <h2>Verified Organizations</h2>
          <p className="section-description">
            These are government-verified organizations working for the welfare of soldiers and their families.
          </p>

          <div className="organizations-grid">
            {organizations.map(org => (
              <div key={org.id} className="organization-card card">
                <div className="org-icon">{org.icon}</div>
                <div className="verified-badge">
                  <span>✓</span> Verified
                </div>
                <h3>{org.name}</h3>
                <p className="org-description">{org.description}</p>
                <div className="org-website">
                  <strong>Official Website:</strong>
                  <br />
                  {org.website.startsWith('http') ? (
                    <a href={org.website} target="_blank" rel="noopener noreferrer">
                      {org.website}
                    </a>
                  ) : (
                    <span>{org.website}</span>
                  )}
                </div>
                {org.website.startsWith('http') && (
                  <button 
                    className="btn btn-primary"
                    onClick={() => window.open(org.website, '_blank')}
                  >
                    Visit Official Website
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="guidelines-section card">
          <h2>Donation Guidelines</h2>
          <div className="guidelines-grid">
            <div className="guideline-item">
              <div className="guideline-icon">✓</div>
              <div className="guideline-content">
                <h4>Verify Authenticity</h4>
                <p>Always verify the organization through official government sources</p>
              </div>
            </div>
            <div className="guideline-item">
              <div className="guideline-icon">✓</div>
              <div className="guideline-content">
                <h4>Use Official Channels</h4>
                <p>Donate only through official websites or verified payment gateways</p>
              </div>
            </div>
            <div className="guideline-item">
              <div className="guideline-icon">✓</div>
              <div className="guideline-content">
                <h4>Get Receipts</h4>
                <p>Always obtain official receipts for tax benefits and record-keeping</p>
              </div>
            </div>
            <div className="guideline-item">
              <div className="guideline-icon">✓</div>
              <div className="guideline-content">
                <h4>Beware of Scams</h4>
                <p>Never share personal or financial information with unverified sources</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;