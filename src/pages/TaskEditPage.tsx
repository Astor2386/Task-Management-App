import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import PageLayout from '../components/PageLayout';
import TaskForm from '../components/TaskForm';
import { useTaskContext } from '../hooks/useTaskContext';
import type { Task } from '../models/Task.model';

const TaskEditPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { tasks } = useTaskContext();
  const { user } = useAuth0();

  if (!id || !user) return <div>Invalid task or user not authenticated</div>;

  const task = tasks.find((task: Task) => task.id === id && task.createdBy === user.email);

  if (!task) return <div>Task not found</div>;

  return (
    <PageLayout>
      <h2>Edit Task</h2>
      <TaskForm task={task} />
    </PageLayout>
  );
};

export default TaskEditPage;