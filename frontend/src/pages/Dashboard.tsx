import React from 'react';

const Dashboard: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('es-ES', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const styles: { [key: string]: React.CSSProperties } = {
    header: {
      marginBottom: '40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    welcomeText: {
      fontSize: '32px',
      fontWeight: '700',
      marginBottom: '8px',
      background: 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    dateText: {
      color: 'rgba(255, 255, 255, 0.6)',
      fontSize: '14px',
      fontWeight: '500',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px',
      marginBottom: '40px',
    },
    statCard: {
      background: 'rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      padding: '28px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      position: 'relative' as const,
      overflow: 'hidden',
    },
    statCardGlow: {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
      opacity: 0,
      transition: 'opacity 0.4s ease',
      pointerEvents: 'none' as const,
    },
    statHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '20px',
    },
    statIcon: {
      fontSize: '32px',
      width: '56px',
      height: '56px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)',
    },
    statTrend: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '14px',
      fontWeight: '600',
      padding: '6px 12px',
      borderRadius: '8px',
      background: 'rgba(34, 197, 94, 0.15)',
      color: '#4ade80',
    },
    statNumber: {
      fontSize: '36px',
      fontWeight: '800',
      marginBottom: '8px',
      background: 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.9) 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    statLabel: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: '14px',
      fontWeight: '500',
    },
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '24px',
      marginBottom: '24px',
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
    tableRow: {
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      transition: 'all 0.3s ease',
    },
    tableCell: {
      padding: '16px 8px',
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
    badgePending: {
      background: 'rgba(251, 191, 36, 0.15)',
      color: '#fbbf24',
      border: '1px solid rgba(251, 191, 36, 0.3)',
    },
    badgeApproved: {
      background: 'rgba(34, 197, 94, 0.15)',
      color: '#4ade80',
      border: '1px solid rgba(34, 197, 94, 0.3)',
    },
    badgeReview: {
      background: 'rgba(59, 130, 246, 0.15)',
      color: '#60a5fa',
      border: '1px solid rgba(59, 130, 246, 0.3)',
    },
    interviewItem: {
      padding: '16px',
      background: 'rgba(255, 255, 255, 0.03)',
      borderRadius: '12px',
      marginBottom: '12px',
      borderLeft: '3px solid #667eea',
      transition: 'all 0.3s ease',
    },
    chartCard: {
      gridColumn: '1 / -1',
      background: 'rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      padding: '28px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    barChart: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: '16px',
      height: '200px',
      marginTop: '24px',
    },
    bar: {
      flex: 1,
      background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '8px 8px 0 0',
      position: 'relative' as const,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      minHeight: '20px',
    },
    barLabel: {
      textAlign: 'center' as const,
      marginTop: '12px',
      fontSize: '12px',
      color: 'rgba(255, 255, 255, 0.6)',
      fontWeight: '500',
    },
  };

  const stats = [
    { icon: '👥', number: '1,247', label: 'Total Candidates', trend: '+12%' },
    { icon: '💼', number: '34', label: 'Active Jobs', trend: '+5%' },
    { icon: '📄', number: '89', label: 'Pending Applications', trend: '+23%' },
    { icon: '🎤', number: '15', label: 'Interviews This Week', trend: '+8%' },
  ];

  const recentApplications = [
    { name: 'María García', position: 'Senior Developer', status: 'pending', initials: 'MG' },
    { name: 'Carlos Rodríguez', position: 'UX Designer', status: 'approved', initials: 'CR' },
    { name: 'Ana Martínez', position: 'Product Manager', status: 'review', initials: 'AM' },
    { name: 'Luis Fernández', position: 'DevOps Engineer', status: 'approved', initials: 'LF' },
    { name: 'Isabel Torres', position: 'Data Scientist', status: 'pending', initials: 'IT' },
  ];

  const upcomingInterviews = [
    { candidate: 'Juan Pérez', position: 'Backend Dev', time: 'Hoy 10:00 AM' },
    { candidate: 'Laura Sánchez', position: 'Frontend Dev', time: 'Hoy 2:00 PM' },
    { candidate: 'Miguel Ángel', position: 'Full Stack', time: 'Mañana 11:00 AM' },
    { candidate: 'Sofia López', position: 'QA Engineer', time: 'Mañana 3:00 PM' },
  ];

  const monthlyData = [
    { month: 'Ene', value: 65 },
    { month: 'Feb', value: 78 },
    { month: 'Mar', value: 90 },
    { month: 'Abr', value: 81 },
    { month: 'May', value: 95 },
    { month: 'Jun', value: 110 },
  ];

  const maxValue = Math.max(...monthlyData.map(d => d.value));

  const getStatusBadge = (status: string) => {
    const statusMap: { [key: string]: React.CSSProperties } = {
      pending: styles.badgePending,
      approved: styles.badgeApproved,
      review: styles.badgeReview,
    };
    return { ...styles.badge, ...statusMap[status] };
  };

  return (
    <>
      {/* Header */}
      <header style={styles.header}>
        <div>
          <h1 style={styles.welcomeText}>Bienvenido de nuevo, Antonio</h1>
          <p style={styles.dateText}>{currentDate}</p>
        </div>
      </header>

      {/* Stats Cards */}
      <div style={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div
            key={index}
            style={styles.statCard}
            onMouseEnter={(e) => {
              const glow = e.currentTarget.querySelector('.stat-glow') as HTMLElement;
              if (glow) glow.style.opacity = '1';
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.3)';
            }}
            onMouseLeave={(e) => {
              const glow = e.currentTarget.querySelector('.stat-glow') as HTMLElement;
              if (glow) glow.style.opacity = '0';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div className="stat-glow" style={styles.statCardGlow}></div>
            <div style={styles.statHeader}>
              <div style={styles.statIcon}>{stat.icon}</div>
              <div style={styles.statTrend}>
                ↗ {stat.trend}
              </div>
            </div>
            <div style={styles.statNumber}>{stat.number}</div>
            <div style={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div style={styles.contentGrid}>
        {/* Recent Applications */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>
            <span>📋</span>
            Aplicaciones Recientes
          </h2>
          <table style={styles.table}>
            <tbody>
              {recentApplications.map((app, index) => (
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
                      <div>
                        <div style={{ fontWeight: '600', marginBottom: '4px' }}>{app.name}</div>
                        <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)' }}>
                          {app.position}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ ...styles.tableCell, textAlign: 'right' }}>
                    <span style={getStatusBadge(app.status)}>
                      {app.status === 'pending' ? 'Pendiente' : 
                       app.status === 'approved' ? 'Aprobado' : 'En Revisión'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Upcoming Interviews */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>
            <span>📅</span>
            Próximas Entrevistas
          </h2>
          {upcomingInterviews.map((interview, index) => (
            <div
              key={index}
              style={styles.interviewItem}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(102, 126, 234, 0.1)';
                e.currentTarget.style.transform = 'translateX(8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <div style={{ fontWeight: '600', marginBottom: '6px' }}>{interview.candidate}</div>
              <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '6px' }}>
                {interview.position}
              </div>
              <div style={{ fontSize: '12px', color: '#667eea', fontWeight: '600' }}>
                🕐 {interview.time}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div style={styles.chartCard}>
        <h2 style={styles.cardTitle}>
          <span>📊</span>
          Aplicaciones por Mes
        </h2>
        <div style={styles.barChart}>
          {monthlyData.map((data, index) => (
            <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div
                style={{
                  ...styles.bar,
                  height: `${(data.value / maxValue) * 100}%`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scaleY(1.05)';
                  e.currentTarget.style.boxShadow = '0 -4px 20px rgba(102, 126, 234, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scaleY(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontWeight: '700',
                  fontSize: '14px',
                }}>
                  {data.value}
                </div>
              </div>
              <div style={styles.barLabel}>{data.month}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;

