import { useAuth0 } from '@auth0/auth0-react';
import { Card, Button } from 'react-bootstrap';
import { useTaskContext } from '../hooks/useTaskContext';
import { useNavigate, useParams } from 'react-router-dom';
import type { Task } from '../models/Task.model';

const TaskDetails: React.FC = () => {
  const { tasks, deleteTask } = useTaskContext();
  const { user } = useAuth0();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id || !user) return <div>Task not found or user not authenticated</div>;

  const task = tasks.find((task: Task) => task.id === id && task.createdBy === user.email);

  if (!task) return <div>Task not found</div>;

  return (
    <Card>
      <Card.Header>{task.title}</Card.Header>
      <Card.Body>
        <Card.Text>
          <strong>Description:</strong> {task.description || 'No description provided'}
        </Card.Text>
        <Card.Text>
          <strong>Status:</strong> {task.status}
        </Card.Text>
        <Card.Text>
          <strong>Due Date:</strong> {task.dueDate || 'No due date set'}
        </Card.Text>
        <Card.Text>
          <strong>Created By:</strong> {task.createdBy}
        </Card.Text>
        <Button
          variant='outline-primary'
          className='me-2'
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Edit
        </Button>
        <Button
          variant='outline-danger'
          onClick={() => {
            deleteTask(task.id);
            navigate('/dashboard');
          }}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default TaskDetails;