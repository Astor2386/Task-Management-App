import { useState, type FormEvent } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import type { Task } from '../models/Task.model';
import { useTaskContext } from '../hooks/useTaskContext';
import { useNavigate } from 'react-router-dom';

interface TaskFormProps {
  task?: Task;
}

const TaskForm: React.FC<TaskFormProps> = ({ task }) => {
  const { user } = useAuth0();
  const { addTask, updateTask } = useTaskContext();
  const navigate = useNavigate();
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [status, setStatus] = useState<'OPEN' | 'IN_PROGRESS' | 'DONE'>(task?.status || 'OPEN');
  const [dueDate, setDueDate] = useState(task?.dueDate || '');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Title is required');
      return;
    }

    if (!user?.email) {
      setError('User not authenticated');
      return;
    }

    const newTask: Task = {
      id: task?.id || Date.now().toString(),
      title: title.trim(),
      description: description.trim() || undefined,
      status,
      dueDate: dueDate || undefined,
      createdBy: user.email,
    };

    if (task) {
      updateTask(task.id, newTask);
    } else {
      addTask(newTask);
    }

    navigate('/dashboard');
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant='danger'>{error}</Alert>}
      <Form.Group className='mb-3' controlId='title'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='description'>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as='textarea'
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='status'>
        <Form.Label>Status</Form.Label>
        <Form.Select value={status} onChange={(e) => setStatus(e.target.value as 'OPEN' | 'IN_PROGRESS' | 'DONE')}>
          <option value='OPEN'>Open</option>
          <option value='IN_PROGRESS'>In Progress</option>
          <option value='DONE'>Done</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className='mb-3' controlId='dueDate'>
        <Form.Label>Due Date</Form.Label>
        <Form.Control
          type='date'
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </Form.Group>
      <Button type='submit' variant='primary'>
        {task ? 'Update Task' : 'Create Task'}
      </Button>
    </Form>
  );
};

export default TaskForm;