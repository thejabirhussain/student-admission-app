import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentDetail = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/students/${id}`)
      .then(res => setStudent(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!student) return <div className="container mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Student Details</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{student.name}</h5>
          <p className="card-text"><strong>Admission No:</strong> {student.admissionNo}</p>
          <p className="card-text"><strong>Father's Name:</strong> {student.fatherName}</p>
          <p className="card-text"><strong>Address:</strong> {student.address}</p>
          <p className="card-text"><strong>Group:</strong> {student.group}</p>
          <p className="card-text"><strong>Total Marks SSC:</strong> {student.totalMarksSSC}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;