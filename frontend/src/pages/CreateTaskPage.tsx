import React, { useState } from 'react';

const CreateTaskPage = () => {
  // State variables for your form
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low'); // Mandatory for Group 4!

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New Task:", { title, description, priority });
    alert("Task captured! (Ready for Commit 2 connection)");
  };

  return (
    <div className="task-container"> 
      {/* Use the same class name you used in Phase 1 */}
      <h1>Create New Task</h1>
      
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label>Task Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="What needs to be done?"
            required 
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            placeholder="Add some details..."
          />
        </div>

        <div className="form-group">
          <label>Priority</label>
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Add Task</button>
      </form>
    </div>
  );
};

export default CreateTaskPage;