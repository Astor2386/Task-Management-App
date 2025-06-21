import { useAuth0 } from '@auth0/auth0-react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import { useTaskContext } from '../hooks/useTaskContext';
import type { Task } from '../models/Task.model';
import { Link } from 'react-router-dom';

const TaskList: React.FC = () => {
  const { tasks, deleteTask } = useTaskContext();
  const { user } = useAuth0();

  if (!user) return null;

  const userTasks = tasks.filter((task: { createdBy: string | undefined; }) => task.createdBy === user.email);

  return (
    <Card>
      <Card.Header>Your Tasks</Card.Header>
      <ListGroup variant='flush'>
        {userTasks.length === 0 && (
          <ListGroup.Item>No tasks found. Create one!</ListGroup.Item>
        )}
        {userTasks.map((task: Task) => (
          <ListGroup.Item key={task.id} className='d-flex justify-content-between align-items-center'>
            <div>
              <Link to={`/task/${task.id}`}>{task.title}</Link>
              <div className='text-muted'>{task.status}</div>
            </div>
            <div>
              <Link to={`/edit/${task.id}`}>
                <Button variant='outline-primary' size='sm' className='me-2'>
                  Edit
                </Button>
              </Link>
              <Button
                variant='outline-danger'
                size='sm'
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default TaskList;