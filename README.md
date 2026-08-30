# Kanban Board

A web application for managing projects and tasks in a Kanban-style workflow.

Users can register and log in, create projects and manage tasks within these projects. Tasks can be edited, deleted and assigned different statuses.

## Features

### User Management

* User registration
* User login
* Logout
* Display of the currently logged-in user

### Projects

* Display all projects
* Create a new project
* Open a project
* Delete a project
* Display the project creator
* Display the project creation date

### Tasks

* Create tasks inside a project
* Display tasks belonging to a project
* Edit task title and description
* Delete tasks
* Change task status
* Display the task creator
* Display the task creation date

### Task Statuses

Tasks can have one of three statuses:

* **Todo**
* **In Process**
* **Done**

## Technologies

### Frontend

* React
* JavaScript
* Vite
* React Router
* Zustand
* CSS

### Backend

* Node.js
* Express
* REST API
* Nano

### Database

* CouchDB

## Project Structure

```text
kanban/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   └── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── store/
│   │   └── ...
│   ├── vite.config.js
│   └── package.json
│
├── .gitignore
└── README.md
```

## Application Structure

The application is divided into a frontend and a backend.

```text
User
 ↓
React Frontend
 ↓
REST API
 ↓
Express Backend
 ↓
CouchDB
```

The **frontend** is responsible for the user interface, navigation, forms and displaying data.

The **backend** handles API requests, application logic and communication with the database.

**CouchDB** stores users, projects and tasks.

## Main API Routes

### Authentication

```text
POST /api/auth/register
POST /api/auth/login
```

### Projects

```text
GET    /api/projects
GET    /api/projects/:id
POST   /api/projects
DELETE /api/projects/:id
```

### Tasks

```text
GET    /api/tasks/:projectId
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
```

## State Management

The frontend uses **Zustand** for managing application data such as projects and tasks.

API requests are separated into the frontend `services` folder.

The backend follows a layered structure:

```text
Routes
  ↓
Controllers
  ↓
Services
  ↓
CouchDB
```

* **Routes** define the API endpoints.
* **Controllers** handle HTTP requests and responses.
* **Services** contain the application logic.
* **CouchDB** stores the application data.

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

### Backend

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the backend:

```bash
npm start
```

The backend runs with `node src/server.js`.

### Frontend

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend is configured to run on port **80** using Vite.

CouchDB must be running and configured so that the backend can connect to the required databases.

## Author

Developed as a JavaScript training project.
