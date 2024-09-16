import React from 'react';
import './schedule.css';
import { useState, useEffect } from 'react';


const Schedule = () => {
  // Sample employee data
  const employee = [
    {
      id: 1,
      name: 'Sanika Narwade',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/3201696/pexels-photo-3201696.jpeg?auto=compress&cs=tinysrgb&w=600',
      task: 'Develop login module',
      assignDate: '2024-09-10',
      deadlineDate: '2024-09-20',
      reportTo: 'Project Manager',
      status: 'Approved',
    },
    {
      id: 2,
      name: 'Avantika Deshmukh',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=600',
      task: 'Develop login module',
      assignDate: '2024-09-10',
      deadlineDate: '2024-09-20',
      reportTo: 'Project Manager',
      status: 'Pending'
    },
    {
      id: 3,
      name: 'Gajanan Palepwad',
      role: 'Software Engineer',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQFk-0Ig29ompQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1724962730083?e=1732147200&v=beta&t=OdE7TE8GTNMVochucGB6mFyiH2XYGD9_atz9GaCpgug',
      task: 'Develop login module',
      assignDate: '2024-09-10',
      deadlineDate: '2024-09-20',
      reportTo: 'Project Manager',
      status: 'Approved',
    },
    {
      id: 4,
      name: 'Saurabh Tikar',
      role: 'Software Engineer',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQFF-oe7U7PTNw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1719563999518?e=1732147200&v=beta&t=YyPh8uubFPFbZEtxfeCRLRKa8zfwaXIJ7cIkfFhvMVA',
      task: 'Develop login module',
      assignDate: '2024-09-10',
      deadlineDate: '2024-09-20',
      reportTo: 'Project Manager',
      status: 'Approved',
    },
    {
      id: 5,
      name: '  Tejas  R. Borse',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600', // placeholder image
      task: 'Develop login module',
      assignDate: '2024-09-10',
      deadlineDate: '2024-09-20',
      reportTo: 'Project Manager',
      status: 'Pending'
    },
    {
      id: 6,
      name: 'Vikram Khupse',
      role: 'Software Engineer',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQHvBrlVLKSsVQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723709208324?e=1732147200&v=beta&t=KzhcUcXsrvOtWbR9qrXUZICqnXCzFHeabuUdGzLQZp4',
      task: 'Develop login module',
      assignDate: '2024-09-10',
      deadlineDate: '2024-09-20',
      reportTo: 'Project Manager',
      status: 'Approved',
    },
   
  ];

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger fade-in effect after component mount
    setFadeIn(true);
  }, []);

  return (
    <div className="sch-container">
      {/* <h2>Employee Schedule</h2> */}      
      {/* Search bar */}
      <div className="sch-search">
        <input type="text" placeholder="Search employee..." />
        <button id="search-btn">Search</button>
      </div>

      {/* Employee schedule list */}
      <div className="sch-list">
        {employee.map((employee) => (
          <div className={`sch-card ${fadeIn ? 'fade-in' : ''}`} key={employee.id}>
            {/* Employee image */}
            <img src={employee.image} alt={employee.name} className="sch-employee-image" />

            {/* Employee details */}
            <div className="sch-details">
              <h3>{employee.name}</h3>
              <p>Role: {employee.role}</p>
              <p>Task: {employee.task}</p>
              <p>Assign Date: {employee.assignDate}</p>
              <p>Deadline: {employee.deadlineDate}</p>
              <p>Report to: {employee.reportTo}</p>
            </div>

            {/* Edit/Delete buttons */}
            <div className="sch-actions">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </div>

            {/* Status button */}
            <div className="sch-status">
              <button className={employee.status === 'Approved' ? 'approved' : 'pending'}>
                {employee.status}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;