import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import HomePage from './pages/HomePage';
import CallbackPage from './pages/CallbackPage';
import DashboardPage from './pages/DashboardPage';
import TaskCreatePage from './pages/TaskCreatePage';
import TaskEditPage from './pages/TaskEditPage';
import TaskDetailPage from './pages/TaskDetailPage';
import AuthenticationGuard from './components/AuthenticationGuard';
import { TaskProvider } from './context/TaskContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <TaskProvider>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/dashboard'
          element={<AuthenticationGuard component={DashboardPage} />}
        />
        <Route
          path='/create'
          element={<AuthenticationGuard component={TaskCreatePage} />}
        />
        <Route
          path='/edit/:id'
          element={<AuthenticationGuard component={TaskEditPage} />}
        />
        <Route
          path='/task/:id'
          element={<AuthenticationGuard component={TaskDetailPage} />}
        />
        <Route path='/callback' element={<CallbackPage />} />
      </Routes>
    </TaskProvider>
  );
};

export default App;