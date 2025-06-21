# Task Management App

A TypeScript-powered task management application built with React, Auth0 for authentication, and Bootstrap for responsive UI. This app allows users to create, edit, view, and delete tasks securely, with a focus on type safety and modern development practices.

## Features
- **Task Dashboard**: Displays a list of tasks created by the authenticated user, with options to view, edit, or delete tasks.
- **Task Details**: Shows detailed information for a selected task, including title, description, status, due date, and creator.
- **Task Creation and Editing**: Provides forms for creating new tasks or updating existing ones, with validation (e.g., required title).
- **Authentication**: Secure login and logout functionality using Auth0 with Google OAuth2, protecting sensitive routes.
- **Responsive Design**: Utilizes Bootstrap for a mobile-friendly and visually appealing interface.
- **Type Safety**: Leverages TypeScript for robust type checking and error prevention.
- **Global State Management**: Implements the Context API to manage task state across the application.

## Project Architecture
The project follows a modular structure to ensure maintainability and scalability:
Below is a visuial on how the layout should be structured. Note, I did not add a readme section here, as I just uploaded it to GitHub. 

task-management-app/
├── src/
│   ├── components/          # Reusable UI components (e.g., NavBar, TaskList, TaskForm)
│   ├── context/            # Context API for global state management (e.g., TaskContext)
│   ├── hooks/              # Custom hooks (e.g., useTaskContext)
│   ├── models/             # TypeScript interfaces (e.g., Task.model.ts)
│   ├── pages/              # Page components for routing (e.g., DashboardPage, TaskCreatePage)
│   ├── App.tsx             # Main app component with routing configuration
│   ├── Auth0Provider.tsx   # Auth0 configuration and provider
│   ├── main.tsx            # Entry point for the React app
│   ├── App.css             # Global CSS styles
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration


- **Components**: Encapsulate UI logic and are reusable across pages.
- **Context**: Manages global state (tasks) using the Context API and a custom provider.
- **Hooks**: Provide typed access to context and other custom logic.
- **Models**: Define TypeScript interfaces for data structures (e.g., `Task`).
- **Pages**: Handle route-specific rendering and integrate components.

## Implementation Details
- **TypeScript Integration**: Uses interfaces (e.g., `Task`) and union types (e.g., `'OPEN' | 'IN_PROGRESS' | 'DONE'`) for type safety. Type-only imports (e.g., `import type`) are employed to optimize builds.
- **State Management**: The Context API with `TaskContext` and `useTaskContext` hook manages task data, avoiding external state management libraries.
- **Authentication**: Auth0 handles secure login/logout with Google OAuth2, protected by an `AuthenticationGuard` component.
- **Routing**: React Router DOM manages client-side navigation with protected routes.
- **UI**: Bootstrap provides pre-built components, enhanced with custom CSS in `App.css`. (I went with simple CSS for this project)
- **Build Tool**: Vite ensures fast development and builds, configured via `vite.config.ts`.
- **Error Handling**: Basic form validation and Auth0 error handling are implemented

## Setup Instructions
Before running the app, ensure you have the following prerequisites:

- **Node.js**: Version 14.x or higher (includes npm).
- **Git**: For cloning my repository.
- **Auth0 Account**: For authentication setup.

### 1. Configure Auth0
Create an account at auth0.com if you don’t have one.

In the Auth0 dashboard:
Go to Applications > Create Application.

Name it TaskManagementApp and select "Single Page Web Applications".

In the Settings of the actual application tab (not the main settings of the account):
Set Allowed Callback URLs to http://localhost:5173/callback.

Set Allowed Logout URLs to http://localhost:5173.

Note the Domain (e.g., your-tenant.auth0.com) and Client ID.

In the Connections tab, enable google-oauth2.

Save changes. 

Update src/Auth0Provider.tsx with your Auth0 domain and clientId:
typescript

const domain = 'your-tenant.auth0.com'; // Replace with your Auth0 domain
const clientId = 'your-client-id'; // Replace with your Auth0 client ID


2. Clone the Repository
```Command Prompt
git clone <repository-url>
cd task-management-app

### 3. Install Dependencies
```Command Prompt
npm install

4. Run the App
```Command Prompt
npm run dev

Open http://localhost:5173 in your browser.

** Installation **
The project uses Vite as the build tool and includes all necessary dependencies in package.json.

Run npm install to install React, TypeScript, Auth0, Bootstrap, React Router DOM, and Axios.

Usage
Login:
Navigate to http://localhost:5173.

Click the "Log In" button and authenticate using your Google account via Auth0.

After login, you’ll be redirected to the dashboard.

Dashboard:
View a list of your tasks with options to view details, edit, or delete.

Tasks are filtered by the authenticated user’s email.

Create Task:
Click "Create Task" in the navigation bar.

Fill out the form (title is required) and submit to add a new task.

Edit Task:
Click "Edit" on a task in the dashboard.

Modify the task details and save changes.

View Task Details:
Click a task title to see its full details (title, description, status, due date, creator).

Logout:
Click "Log Out" to end the session and return to the home page.

*** Tech Stack ***
React: Frontend framework for building the UI.

TypeScript: Adds static typing for enhanced development experience.

Auth0: Handles authentication and authorization with Google OAuth2.

React Bootstrap: Provides responsive and styled UI components.

React Router DOM: Manages client-side routing.

Context API: Manages global state without external libraries.

Vite: Fast build tool for development and production.

CSS: Custom styles in App.css for layout and design.

# Special Notes:
-The ReadMe file was removed from the main app, and can only be accessed via GitHub
- Very important to make sure you're in the proper setting area when adding in the local host information. It is NOT the main accounts settings tab, it's the settings within the application
- Minimal CSS use
- Will display a red alert box on the main Auth0 page, indicating a message regarding Dev Keys. Irrelevant as this is just a project, not meant to be used in production, currently...










