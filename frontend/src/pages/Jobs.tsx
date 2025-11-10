import React from 'react';

const Jobs: React.FC = () => {
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
      marginBottom: '24px',
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: '700',
      marginBottom: '24px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    jobCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      padding: '24px',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      marginBottom: '16px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    jobHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '16px',
    },
    jobTitle: {
      fontSize: '20px',
      fontWeight: '700',
      marginBottom: '8px',
    },
    jobInfo: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap' as const,
      marginBottom: '12px',
    },
    jobInfoItem: {
      fontSize: '13px',
      color: 'rgba(255, 255, 255, 0.7)',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
    },
    jobDescription: {
      fontSize: '14px',
      color: 'rgba(255, 255, 255, 0.6)',
      lineHeight: '1.6',
      marginTop: '12px',
    },
    badge: {
      padding: '6px 12px',
      borderRadius: '8px',
      fontSize: '12px',
      fontWeight: '600',
      display: 'inline-block',
    },
    badgeOpen: {
      background: 'rgba(34, 197, 94, 0.15)',
      color: '#4ade80',
      border: '1px solid rgba(34, 197, 94, 0.3)',
    },
    badgeDraft: {
      background: 'rgba(251, 191, 36, 0.15)',
      color: '#fbbf24',
      border: '1px solid rgba(251, 191, 36, 0.3)',
    },
  };

  const jobs = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Madrid, España',
      status: 'open',
      applicants: 23,
      description: 'Buscamos un desarrollador full stack experimentado para liderar proyectos innovadores.',
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Barcelona, España',
      status: 'open',
      applicants: 15,
      description: 'Únete a nuestro equipo de diseño para crear experiencias excepcionales.',
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      status: 'open',
      applicants: 18,
      description: 'Optimiza nuestra infraestructura cloud y procesos de CI/CD.',
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Valencia, España',
      status: 'draft',
      applicants: 0,
      description: 'Lidera la estrategia y desarrollo de productos innovadores.',
    },
    {
      title: 'Data Scientist',
      department: 'Data',
      location: 'Madrid, España',
      status: 'open',
      applicants: 12,
      description: 'Analiza datos complejos y genera insights accionables.',
    },
  ];

  return (
    <>
      <h1 style={styles.pageTitle}>💼 Ofertas de Trabajo</h1>
      <p style={styles.pageSubtitle}>Gestiona las posiciones abiertas y borradores</p>

      <div style={styles.card}>
        <h2 style={styles.cardTitle}>
          <span>📝</span>
          Posiciones Activas
        </h2>
        {jobs.map((job, index) => (
          <div
            key={index}
            style={styles.jobCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(102, 126, 234, 0.08)';
              e.currentTarget.style.transform = 'translateX(4px)';
              e.currentTarget.style.borderLeft = '4px solid #667eea';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.borderLeft = '1px solid rgba(255, 255, 255, 0.08)';
            }}
          >
            <div style={styles.jobHeader}>
              <div>
                <div style={styles.jobTitle}>{job.title}</div>
                <div style={styles.jobInfo}>
                  <span style={styles.jobInfoItem}>
                    🏢 {job.department}
                  </span>
                  <span style={styles.jobInfoItem}>
                    📍 {job.location}
                  </span>
                  <span style={styles.jobInfoItem}>
                    👥 {job.applicants} candidatos
                  </span>
                </div>
              </div>
              <span style={job.status === 'open' ? {...styles.badge, ...styles.badgeOpen} : {...styles.badge, ...styles.badgeDraft}}>
                {job.status === 'open' ? 'Abierta' : 'Borrador'}
              </span>
            </div>
            <div style={styles.jobDescription}>{job.description}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Jobs;

