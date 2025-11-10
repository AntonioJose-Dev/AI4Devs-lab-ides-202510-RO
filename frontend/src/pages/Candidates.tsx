import React from 'react';

const Candidates: React.FC = () => {
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
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '20px',
    },
    candidateCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      padding: '20px',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    avatar: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '700',
      fontSize: '24px',
      marginBottom: '16px',
    },
    candidateName: {
      fontSize: '18px',
      fontWeight: '700',
      marginBottom: '8px',
    },
    candidateInfo: {
      fontSize: '13px',
      color: 'rgba(255, 255, 255, 0.6)',
      marginBottom: '4px',
    },
    badge: {
      padding: '4px 10px',
      borderRadius: '6px',
      fontSize: '11px',
      fontWeight: '600',
      display: 'inline-block',
      marginTop: '12px',
      background: 'rgba(102, 126, 234, 0.2)',
      color: '#a5b4fc',
    },
  };

  const candidates = [
    { name: 'María García', email: 'maria.garcia@email.com', phone: '+34 612 345 678', status: 'Activo', initials: 'MG' },
    { name: 'Carlos Rodríguez', email: 'carlos.rodriguez@email.com', phone: '+34 623 456 789', status: 'Entrevista', initials: 'CR' },
    { name: 'Ana Martínez', email: 'ana.martinez@email.com', phone: '+34 634 567 890', status: 'Activo', initials: 'AM' },
    { name: 'Luis Fernández', email: 'luis.fernandez@email.com', phone: '+34 645 678 901', status: 'Oferta', initials: 'LF' },
    { name: 'Isabel Torres', email: 'isabel.torres@email.com', phone: '+34 656 789 012', status: 'Activo', initials: 'IT' },
    { name: 'Juan Pérez', email: 'juan.perez@email.com', phone: '+34 667 890 123', status: 'Screening', initials: 'JP' },
    { name: 'Laura Sánchez', email: 'laura.sanchez@email.com', phone: '+34 678 901 234', status: 'Entrevista', initials: 'LS' },
    { name: 'Miguel Ángel', email: 'miguel.angel@email.com', phone: '+34 689 012 345', status: 'Activo', initials: 'MA' },
  ];

  return (
    <>
      <h1 style={styles.pageTitle}>👥 Candidatos</h1>
      <p style={styles.pageSubtitle}>Gestiona y visualiza todos los candidatos en el sistema</p>

      <div style={styles.card}>
        <h2 style={styles.cardTitle}>
          <span>🔍</span>
          Lista de Candidatos
        </h2>
        <div style={styles.grid}>
          {candidates.map((candidate, index) => (
            <div
              key={index}
              style={styles.candidateCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(102, 126, 234, 0.1)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(102, 126, 234, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={styles.avatar}>{candidate.initials}</div>
              <div style={styles.candidateName}>{candidate.name}</div>
              <div style={styles.candidateInfo}>📧 {candidate.email}</div>
              <div style={styles.candidateInfo}>📱 {candidate.phone}</div>
              <span style={styles.badge}>{candidate.status}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Candidates;

