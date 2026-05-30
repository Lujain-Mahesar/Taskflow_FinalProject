# TaskFlow - Full Stack Task Manager

TaskFlow is a MERN stack application built with TypeScript, 
designed to help users manage their daily tasks with ease. 
This project was a collaboration between Lujain and Parwasha.

---

## Group Members

| Name | Roll Number | Section |
|---|---|---|
| Lujain Mahesar | 2312120 | A |
| Parwasha Shaikh | 2312125 | A |

---

## Team & Responsibilities

### Lujain's Contributions
**Frontend:**
- Initial Vite + React setup and project architecture
- Created Header, Navbar, and Footer components
- Developed TaskCard and TaskListPage
- Built the Priority Filter and connected it to the GET API
- Implemented deletion confirmation and main CSS styling

**Backend:**
- Initial Express + TypeScript setup
- Developed the GET /tasks endpoint with filtering
- Set up global error handling middleware
- Configured tsconfig and created .env.example
- Performed final backend code cleanup

---

### Parwasha's Contributions
**Frontend:**
- Created the Create Task form component
- Integrated the frontend form with the POST /tasks API
- Managed loading and error states for better user experience
- Designed the Empty State UI for when no tasks are present
- Performed final UI styling and layout cleanups

**Backend:**
- Defined the MongoDB Task Schema and Model
- Developed the POST /tasks endpoint for task creation
- Developed the DELETE /tasks/:id endpoint
- Implemented custom request validation middleware
- Authored the project documentation

---

## Features Implemented

### Product Feature (List A)
- **Filter by Priority** — Users can filter tasks by Low, 
Medium, or High priority using a dropdown. Sends a query 
to the backend and returns only matching tasks.

### Engineering / Quality Feature (List B)
- **Confirm Before Delete** — A confirmation dialog appears 
before any task is deleted to prevent accidental deletion.

### Bonus Feature
- **Edit / Update Task** — Each task has an Edit button. 
Clicking it opens the form with existing task data pre-filled. 
The form submits a PUT request to update the task in MongoDB.

---

## Tech Stack
- **Frontend:** React, TypeScript, Vite, CSS
- **Backend:** Node.js, Express, TypeScript
- **Database:** MongoDB Atlas

---

## How to Run the Project

### 1. Clone the Repo
```bash
git clone https://github.com/Lujain-Mahesar/TaskFlow_FinalProject.git
cd TaskFlow_FinalProject
```

### 2. Setup Backend
```bash
cd backend
npm install
npm run dev
```

Create a `.env` file inside the `backend` folder:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskflow
```

### 3. Setup Frontend
Open a new terminal:
```bash
cd frontend
npm install
npm run dev
```

### 4. Open in Browser
http://localhost:5173

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/tasks | Get all tasks (supports ?priority= filter) |
| POST | /api/tasks | Create a new task |
| PUT | /api/tasks/:id | Update an existing task |
| DELETE | /api/tasks/:id | Delete a task |

---

## Course Info
- **Course:** CS4717 Web Technologies I
- **Instructor:** Muhammad Ikram Ul Haq
- **Section:** A

then push it, 
git add README.md
git commit -m "docs: updated final README"
git push