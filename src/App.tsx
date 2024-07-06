// src/App.tsx
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
          {/* <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />  */}
          {/* di atas kode yang jadi, user gaakan bisa ke dashboard sebelum login, sementara yanun masih develop kita matiin */}
          <Route path="/register" element={<RegisterPage />}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

const PublicRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

export default App;
