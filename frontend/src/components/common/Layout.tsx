export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <nav style={{ background: '#333', color: 'white', padding: '10px 20px' }}>
        <h1 style={{ margin: 0 }}>Full-Stack App</h1>
      </nav>
      <main style={{ flex: 1, padding: '20px' }}>
        {children}
      </main>
      <footer style={{ background: '#f5f5f5', padding: '10px 20px', textAlign: 'center' }}>
        <p>© 2026 Personal App</p>
      </footer>
    </div>
  );
}
