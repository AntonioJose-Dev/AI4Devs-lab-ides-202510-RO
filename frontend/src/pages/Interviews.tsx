import React from 'react';

const Interviews: React.FC = () => {
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
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '24px',
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
    interviewCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      padding: '20px',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      marginBottom: '16px',
      borderLeft: '4px solid',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    interviewHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '12px',
    },
    candidateName: {
      fontSize: '18px',
      fontWeight: '700',
      marginBottom: '6px',
    },
    interviewInfo: {
      fontSize: '14px',
      color: 'rgba(255, 255, 255, 0.7)',
      marginBottom: '4px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    badge: {
      padding: '4px 10px',
      borderRadius: '6px',
      fontSize: '11px',
      fontWeight: '600',
      display: 'inline-block',
    },
    badgeScheduled: {
      background: 'rgba(59, 130, 246, 0.15)',
      color: '#60a5fa',
    },
    badgeCompleted: {
      background: 'rgba(34, 197, 94, 0.15)',
      color: '#4ade80',
    },
    badgePending: {
      background: 'rgba(251, 191, 36, 0.15)',
      color: '#fbbf24',
    },
  };

  const upcomingInterviews = [
    {
      candidate: 'María García',
      position: 'Senior Full Stack Developer',
      date: 'Hoy, 10:00 AM',
      type: 'Técnica',
      interviewer: 'Carlos Méndez',
      color: '#667eea',
      status: 'scheduled',
    },
    {
      candidate: 'Juan Pérez',
      position: 'Backend Developer',
      date: 'Hoy, 2:00 PM',
      type: 'HR',
      interviewer: 'Ana López',
      color: '#764ba2',
      status: 'scheduled',
    },
    {
      candidate: 'Laura Sánchez',
      position: 'UX/UI Designer',
      date: 'Mañana, 11:00 AM',
      type: 'Portfolio Review',
      interviewer: 'Pedro García',
      color: '#8b5cf6',
      status: 'scheduled',
    },
    {
      candidate: 'Miguel Ángel',
      position: 'Full Stack Developer',
      date: 'Mañana, 3:00 PM',
      type: 'Final',
      interviewer: 'Isabel Ruiz',
      color: '#ec4899',
      status: 'pending',
    },
  ];

  const recentInterviews = [
    {
      candidate: 'Carlos Rodríguez',
      position: 'DevOps Engineer',
      date: 'Ayer, 9:00 AM',
      type: 'Técnica',
      interviewer: 'Luis Torres',
      score: 8.5,
      color: '#10b981',
      status: 'completed',
    },
    {
      candidate: 'Ana Martínez',
      position: 'Product Manager',
      date: '08 Nov, 4:00 PM',
      type: 'Case Study',
      interviewer: 'María Sánchez',
      score: 9.0,
      color: '#06b6d4',
      status: 'completed',
    },
    {
      candidate: 'Isabel Torres',
      position: 'Data Scientist',
      date: '07 Nov, 1:00 PM',
      type: 'Técnica',
      interviewer: 'Roberto Díaz',
      score: 7.5,
      color: '#f59e0b',
      status: 'completed',
    },
  ];

  const getBadgeStyle = (status: string) => {
    const statusMap: { [key: string]: React.CSSProperties } = {
      scheduled: styles.badgeScheduled,
      completed: styles.badgeCompleted,
      pending: styles.badgePending,
    };
    return { ...styles.badge, ...statusMap[status] };
  };

  return (
    <>
      <h1 style={styles.pageTitle}>🎤 Entrevistas</h1>
      <p style={styles.pageSubtitle}>Gestiona y programa entrevistas con candidatos</p>

      <div style={styles.grid}>
        {/* Upcoming Interviews */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>
            <span>📅</span>
            Próximas Entrevistas
          </h2>
          {upcomingInterviews.map((interview, index) => (
            <div
              key={index}
              style={{ ...styles.interviewCard, borderLeftColor: interview.color }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(102, 126, 234, 0.08)';
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <div style={styles.interviewHeader}>
                <div>
                  <div style={styles.candidateName}>{interview.candidate}</div>
                  <div style={{ ...styles.interviewInfo, fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)' }}>
                    {interview.position}
                  </div>
                </div>
                <span style={getBadgeStyle(interview.status)}>
                  {interview.status === 'scheduled' ? 'Programada' : 'Pendiente'}
                </span>
              </div>
              <div style={styles.interviewInfo}>
                🕐 {interview.date}
              </div>
              <div style={styles.interviewInfo}>
                📝 {interview.type}
              </div>
              <div style={styles.interviewInfo}>
                👤 {interview.interviewer}
              </div>
            </div>
          ))}
        </div>

        {/* Recent Interviews */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>
            <span>✅</span>
            Entrevistas Completadas
          </h2>
          {recentInterviews.map((interview, index) => (
            <div
              key={index}
              style={{ ...styles.interviewCard, borderLeftColor: interview.color }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(102, 126, 234, 0.08)';
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <div style={styles.interviewHeader}>
                <div>
                  <div style={styles.candidateName}>{interview.candidate}</div>
                  <div style={{ ...styles.interviewInfo, fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)' }}>
                    {interview.position}
                  </div>
                </div>
                <span style={getBadgeStyle(interview.status)}>Completada</span>
              </div>
              <div style={styles.interviewInfo}>
                🕐 {interview.date}
              </div>
              <div style={styles.interviewInfo}>
                📝 {interview.type}
              </div>
              <div style={styles.interviewInfo}>
                👤 {interview.interviewer}
              </div>
              <div style={{ 
                ...styles.interviewInfo, 
                marginTop: '8px',
                fontSize: '15px',
                fontWeight: '700',
                color: interview.score >= 8 ? '#4ade80' : interview.score >= 7 ? '#fbbf24' : '#f87171'
              }}>
                ⭐ Puntuación: {interview.score}/10
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Interviews;

