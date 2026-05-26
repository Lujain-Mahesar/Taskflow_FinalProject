 // Commit 1: Initial Page Structure and Form Layout
 
 import React, { useState } from 'react';

const CreateTaskPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New Task:", { title, description, priority });
    alert("Task captured!");
  };
  // Commit 2: Aligning container width and card styling with the project dashboard

  return (
    
    <div className="dashboard-container"> 
      <div className="ui-label">
        <h2>Create New Task</h2>
      </div>

      
      <div className="card"> 
        <form onSubmit={handleSubmit} className="task-form">
          
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px' }}>Task Title</label>
            <input 
              type="text" 
              className="form-control" // Bootstrap-style or standard
              style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }}
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="What needs to be done?"
              required 
            />
          </div>

          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px' }}>Description</label>
            <textarea 
              style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd', minHeight: '120px' }}
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              placeholder="Add some details..."
            />
          </div>

          <div className="form-group" style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px' }}>Priority Level</label>
            <select 
              style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }}
              value={priority} 
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <button 
            type="submit" 
            style={{ 
              width: '100%', 
              padding: '14px', 
              backgroundColor: '#111', // Matches her 'active' tab color
              color: 'white', 
              border: 'none', 
              borderRadius: '6px', 
              fontWeight: '600',
              cursor: 'pointer' 
            }}
          >
            Save Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskPage;