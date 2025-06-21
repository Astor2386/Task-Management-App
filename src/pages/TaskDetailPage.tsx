import PageLayout from '../components/PageLayout';
import TaskDetails from '../components/TaskDetails';

const TaskDetailPage: React.FC = () => {
  return (
    <PageLayout>
      <h2>Task Details</h2>
      <TaskDetails />
    </PageLayout>
  );
};

export default TaskDetailPage;