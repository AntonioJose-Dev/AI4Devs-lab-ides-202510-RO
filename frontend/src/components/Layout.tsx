import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e1b4b 0%, #1f2937 50%, #0f172a 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      color: '#fff',
      overflow: 'hidden',
    },
    sidebar: {
      width: '280px',
      background: 'linear-gradient(180deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)',
      backdropFilter: 'blur(20px)',
      borderRight: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '32px 0',
      position: 'fixed' as const,
      height: '100vh',
      left: 0,
      top: 0,
      boxShadow: '4px 0 24px rgba(0, 0, 0, 0.3)',
    },
    logo: {
      padding: '0 32px',
      marginBottom: '48px',
    },
    logoText: {
      fontSize: '28px',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      letterSpacing: '1px',
    },
    logoSubtext: {
      fontSize: '12px',
      color: 'rgba(255, 255, 255, 0.6)',
      marginTop: '4px',
      fontWeight: '500',
      letterSpacing: '2px',
    },
    navItem: {
      padding: '14px 32px',
      margin: '4px 16px',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      fontSize: '15px',
      fontWeight: '500',
      borderRadius: '12px',
      color: 'rgba(255, 255, 255, 0.7)',
      textDecoration: 'none',
    },
    navItemActive: {
      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%)',
      color: '#fff',
      boxShadow: '0 0 20px rgba(102, 126, 234, 0.4), inset 0 0 20px rgba(102, 126, 234, 0.1)',
      borderLeft: '3px solid #667eea',
    },
    navIcon: {
      fontSize: '22px',
      width: '28px',
      textAlign: 'center' as const,
    },
    mainContent: {
      marginLeft: '280px',
      flex: 1,
      padding: '40px',
      overflowY: 'auto' as const,
      height: '100vh',
    },
  };

  const navItems = [
    { path: '/', icon: '🏠', label: 'Dashboard' },
    { path: '/candidates', icon: '👥', label: 'Candidates' },
    { path: '/jobs', icon: '💼', label: 'Job Postings' },
    { path: '/applications', icon: '📄', label: 'Applications' },
    { path: '/interviews', icon: '🎤', label: 'Interviews' },
    { path: '/recruiters', icon: '👔', label: 'Recruiters' },
  ];

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.logo}>
          <div style={styles.logoText}>LTI ATS</div>
          <div style={styles.logoSubtext}>RECRUITMENT</div>
        </div>
        
        <nav>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                ...styles.navItem,
                ...(location.pathname === item.path ? styles.navItemActive : {}),
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== item.path) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.transform = 'translateX(8px)';
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== item.path) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateX(0)';
                }
              }}
            >
              <span style={styles.navIcon}>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main style={styles.mainContent}>
        {children}
      </main>
    </div>
  );
};

export default Layout;

