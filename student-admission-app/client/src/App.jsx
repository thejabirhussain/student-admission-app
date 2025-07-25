import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdmissionForm from './pages/AdmissionForm';
import StudentList from './pages/StudentList';
import StudentDetail from './pages/StudentDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdmissionForm />} />
        <Route path="/students" element={<StudentList />} />
       <Route path="/students/:id" element={<StudentDetail />} />
      </Routes>
    </Router>
  );
}

export default App;