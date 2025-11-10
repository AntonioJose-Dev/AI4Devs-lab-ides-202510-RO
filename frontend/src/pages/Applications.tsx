import React from 'react';

const Applications: React.FC = () => {
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
    table: {
      width: '100%',
      borderCollapse: 'collapse' as const,
    },
    tableHeader: {
      borderBottom: '2px solid rgba(255, 255, 255, 0.1)',
      textAlign: 'left' as const,
    },
    tableHeaderCell: {
      padding: '16px 12px',
      fontSize: '13px',
      fontWeight: '600',
      color: 'rgba(255, 255, 255, 0.7)',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.5px',
    },
    tableRow: {
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      transition: 'all 0.3s ease',
    },
    tableCell: {
      padding: '16px 12px',
      fontSize: '14px',
    },
    avatar: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '700',
      fontSize: '16px',
    },
    badge: {
      padding: '6px 14px',
      borderRadius: '8px',
      fontSize: '12px',
      fontWeight: '600',
      display: 'inline-block',
    },
    badgeSubmitted: {
      background: 'rgba(59, 130, 246, 0.15)',
      color: '#60a5fa',
      border: '1px solid rgba(59, 130, 246, 0.3)',
    },
    badgeReview: {
      background: 'rgba(251, 191, 36, 0.15)',
      color: '#fbbf24',
      border: '1px solid rgba(251, 191, 36, 0.3)',
    },
    badgeShortlisted: {
      background: 'rgba(139, 92, 246, 0.15)',
      color: '#a78bfa',
      border: '1px solid rgba(139, 92, 246, 0.3)',
    },
    badgeOffered: {
      background: 'rgba(34, 197, 94, 0.15)',
      color: '#4ade80',
      border: '1px solid rgba(34, 197, 94, 0.3)',
    },
  };

  const applications = [
    { 
      candidate: 'María García', 
      position: 'Senior Full Stack Developer', 
      date: '2024-11-08', 
      status: 'review',
      initials: 'MG' 
    },
    { 
      candidate: 'Carlos Rodríguez', 
      position: 'UX/UI Designer', 
      date: '2024-11-07', 
      status: 'shortlisted',
      initials: 'CR' 
    },
    { 
      candidate: 'Ana Martínez', 
      position: 'Product Manager', 
      date: '2024-11-06', 
      status: 'submitted',
      initials: 'AM' 
    },
    { 
      candidate: 'Luis Fernández', 
      position: 'DevOps Engineer', 
      date: '2024-11-05', 
      status: 'offered',
      initials: 'LF' 
    },
    { 
      candidate: 'Isabel Torres', 
      position: 'Data Scientist', 
      date: '2024-11-04', 
      status: 'review',
      initials: 'IT' 
    },
    { 
      candidate: 'Juan Pérez', 
      position: 'Senior Full Stack Developer', 
      date: '2024-11-03', 
      status: 'shortlisted',
      initials: 'JP' 
    },
    { 
      candidate: 'Laura Sánchez', 
      position: 'UX/UI Designer', 
      date: '2024-11-02', 
      status: 'submitted',
      initials: 'LS' 
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusMap: { [key: string]: { style: React.CSSProperties; label: string } } = {
      submitted: { style: styles.badgeSubmitted, label: 'Enviada' },
      review: { style: styles.badgeReview, label: 'En Revisión' },
      shortlisted: { style: styles.badgeShortlisted, label: 'Preseleccionada' },
      offered: { style: styles.badgeOffered, label: 'Oferta Enviada' },
    };
    const statusInfo = statusMap[status] || statusMap.submitted;
    return <span style={{ ...styles.badge, ...statusInfo.style }}>{statusInfo.label}</span>;
  };

  return (
    <>
      <h1 style={styles.pageTitle}>📄 Aplicaciones</h1>
      <p style={styles.pageSubtitle}>Revisa y gestiona todas las aplicaciones recibidas</p>

      <div style={styles.card}>
        <h2 style={styles.cardTitle}>
          <span>📊</span>
          Todas las Aplicaciones
        </h2>
        <table style={styles.table}>
          <thead style={styles.tableHeader}>
            <tr>
              <th style={styles.tableHeaderCell}>Candidato</th>
              <th style={styles.tableHeaderCell}>Posición</th>
              <th style={styles.tableHeaderCell}>Fecha</th>
              <th style={styles.tableHeaderCell}>Estado</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr
                key={index}
                style={styles.tableRow}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <td style={styles.tableCell}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={styles.avatar}>{app.initials}</div>
                    <span style={{ fontWeight: '600' }}>{app.candidate}</span>
                  </div>
                </td>
                <td style={styles.tableCell}>{app.position}</td>
                <td style={styles.tableCell}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.6)' }}>{app.date}</span>
                </td>
                <td style={styles.tableCell}>{getStatusBadge(app.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Applications;

