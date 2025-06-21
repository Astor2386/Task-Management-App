import PageLayout from '../components/PageLayout';
import TaskForm from '../components/TaskForm';

const TaskCreatePage: React.FC = () => {
  return (
    <PageLayout>
      <h2>Create New Task</h2>
      <TaskForm />
    </PageLayout>
  );
};

export default TaskCreatePage;