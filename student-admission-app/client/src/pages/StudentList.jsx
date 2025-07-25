import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/students')
      .then(res => setStudents(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Student List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Admission No</th>
            <th>Name</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student._id} onClick={() => navigate(`/students/${student._id}`)} style={{ cursor: 'pointer' }}>
              <td>{student.admissionNo}</td>
              <td>{student.name}</td>
              <td>{student.group}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;