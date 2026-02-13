import { useEffect, useState } from 'react'
import { Layout } from './components/common/Layout'
import { ErrorBoundary } from './components/common/ErrorBoundary'
import { apiClient } from './api/client'
import '@/styles/App.css'

interface HealthStatus {
  status: string;
  timestamp: string;
}

function App() {
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check backend health
    apiClient
      .get<HealthStatus>('/health')
      .then((data) => {
        setHealth(data);
        setError(null);
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : 'Failed to connect to backend');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <ErrorBoundary>
      <Layout>
        <div>
          <h2>Welcome to Full-Stack App</h2>
          <p>Start building your feature here!</p>

          <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd' }}>
            <h3>Backend Health Check</h3>
            {loading && <p>Checking backend connection...</p>}
            {error && <p style={{ color: 'red' }}>❌ {error}</p>}
            {health && (
              <div>
                <p style={{ color: 'green' }}>✅ Backend is running</p>
                <pre style={{ background: '#f5f5f5', padding: '10px' }}>
                  {JSON.stringify(health, null, 2)}
                </pre>
              </div>
            )}
          </div>

          <div style={{ marginTop: '20px' }}>
            <h3>Next Steps</h3>
            <ol>
              <li>Define your feature in the docs/</li>
              <li>Create a backend controller + service</li>
              <li>Create a React component + hook</li>
              <li>Build and test end-to-end</li>
            </ol>
          </div>
        </div>
      </Layout>
    </ErrorBoundary>
  );
}

export default App

