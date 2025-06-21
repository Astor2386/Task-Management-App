import PageLayout from '../components/PageLayout';
import TaskList from '../components/TaskList';

const DashboardPage: React.FC = () => {
  return (
    <PageLayout>
      <h2>Task Dashboard</h2>
      <TaskList />
    </PageLayout>
  );
};

export default DashboardPage;