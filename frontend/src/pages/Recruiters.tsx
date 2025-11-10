import React from 'react';

const Recruiters: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    pageTitle: {
      fontSize: '32px',
      fontWeight: '700',
      marginBottom: '12px',
      background: 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    pageSubtitle: {
      color: 'rgba(255, 255, 255, 0.6)',
      fontSize: '16px',
      marginBottom: '40px',
    },
    card: {
      background: 'rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      padding: '28px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: '700',
      marginBottom: '24px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      gap: '24px',
    },
    recruiterCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      padding: '24px',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      textAlign: 'center' as const,
    },
    avatar: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '700',
      fontSize: '32px',
      margin: '0 auto 16px',
      border: '3px solid rgba(255, 255, 255, 0.1)',
    },
    recruiterName: {
      fontSize: '20px',
      fontWeight: '700',
      marginBottom: '8px',
    },
    recruiterInfo: {
      fontSize: '14px',
      color: 'rgba(255, 255, 255, 0.6)',
      marginBottom: '4px',
    },
    statsRow: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '16px',
      paddingTop: '16px',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    },
    stat: {
      textAlign: 'center' as const,
    },
    statNumber: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#667eea',
      marginBottom: '4px',
    },
    statLabel: {
      fontSize: '12px',
      color: 'rgba(255, 255, 255, 0.6)',
    },
  };

  const recruiters = [
    {
      name: 'Carlos Méndez',
      email: 'carlos.mendez@lti.com',
      department: 'Engineering',
      activeJobs: 8,
      candidates: 45,
      initials: 'CM',
    },
    {
      name: 'Ana López',
      email: 'ana.lopez@lti.com',
      department: 'Design',
      activeJobs: 5,
      candidates: 32,
      initials: 'AL',
    },
    {
      name: 'Pedro García',
      email: 'pedro.garcia@lti.com',
      department: 'Product',
      activeJobs: 6,
      candidates: 28,
      initials: 'PG',
    },
    {
      name: 'Isabel Ruiz',
      email: 'isabel.ruiz@lti.com',
      department: 'Data',
      activeJobs: 4,
      candidates: 21,
      initials: 'IR',
    },
    {
      name: 'Luis Torres',
      email: 'luis.torres@lti.com',
      department: 'Infrastructure',
      activeJobs: 7,
      candidates: 38,
      initials: 'LT',
    },
    {
      name: 'María Sánchez',
      email: 'maria.sanchez@lti.com',
      department: 'Operations',
      activeJobs: 3,
      candidates: 15,
      initials: 'MS',
    },
  ];

  return (
    <>
      <h1 style={styles.pageTitle}>👔 Reclutadores</h1>
      <p style={styles.pageSubtitle}>Equipo de reclutamiento y sus métricas</p>

      <div style={styles.card}>
        <h2 style={styles.cardTitle}>
          <span>👥</span>
          Equipo de Reclutamiento
        </h2>
        <div style={styles.grid}>
          {recruiters.map((recruiter, index) => (
            <div
              key={index}
              style={styles.recruiterCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(102, 126, 234, 0.1)';
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(102, 126, 234, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={styles.avatar}>{recruiter.initials}</div>
              <div style={styles.recruiterName}>{recruiter.name}</div>
              <div style={styles.recruiterInfo}>📧 {recruiter.email}</div>
              <div style={styles.recruiterInfo}>🏢 {recruiter.department}</div>
              
              <div style={styles.statsRow}>
                <div style={styles.stat}>
                  <div style={styles.statNumber}>{recruiter.activeJobs}</div>
                  <div style={styles.statLabel}>Trabajos</div>
                </div>
                <div style={styles.stat}>
                  <div style={styles.statNumber}>{recruiter.candidates}</div>
                  <div style={styles.statLabel}>Candidatos</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Recruiters;

