export interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'DONE';
  dueDate?: string;
  createdBy: string; // User email from Auth0
}

