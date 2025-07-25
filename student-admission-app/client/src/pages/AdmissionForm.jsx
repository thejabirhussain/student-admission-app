import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({ admissionNo: `ADM${Date.now()}` });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name.startsWith('marksObtained') ? { marksObtained: { ...prev.marksObtained, [name.split('.')[1]]: value } } : {}),
      ...(name.startsWith('aadharDetails') ? { aadharDetails: { ...prev.aadharDetails, [name.split('.')[1]]: value } } : {}),
      ...(name.startsWith('bankDetails') ? { bankDetails: { ...prev.bankDetails, [name.split('.')[1]]: value } } : {}),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Sending request to:', 'https://student-admission-app-1.onrender.com/api/students');
      const response = await axios.post(
        'https://student-admission-app-1.onrender.com/api/students',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Success:', response.data);
      navigate('/students');
    } catch (error) {
      console.error('AxiosError:', error.response ? error.response.data : error.message);
    }
  };

  // Rest of the form JSX remains unchanged
  return (
    <div className="container mt-5">
      <div className="form-header">
        <h1>ANNOOR EDUCATIONAL INSTITUTIONS</h1>
        <h2>APPLICATION FORM FOR ADMISSION TO INTERMEDIATE I / II YEAR 20 - 20</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p>MAHABOOB MUSLIM MINORITY EDUCATIONAL SOCIETY</p>
            <p>Read No. 14/2/05, College Code: 12512</p>
            <p>Rayachoty, Annamayya Dist. A.P.</p>
          </div>
          <div className="photo-placeholder">PHOTO</div>
        </div>
      </div>

      <div className="form-section">
        <h3>Group, Medium, Second Language</h3>
        <div className="row g-3">
          <div className="col-md-4"><input className="form-control" name="group" onChange={handleChange} placeholder="Group" /></div>
          <div className="col-md-4"><input className="form-control" name="medium" onChange={handleChange} placeholder="Medium" /></div>
          <div className="col-md-4"><input className="form-control" name="secondLanguage" onChange={handleChange} placeholder="Second Language" /></div>
        </div>
      </div>

      <div className="form-section">
        <h3>Total Marks SSC</h3>
        <div className="row g-3">
          <div className="col-md-3"><input className="form-control" name="totalMarksSSC" type="number" onChange={handleChange} placeholder="Total Marks SSC" /></div>
          <div className="table-custom">
            <table>
              <tbody>
                <tr>
                  <td>Maths</td><td><input className="form-control" name="marksObtained.maths" type="number" onChange={handleChange} /></td>
                  <td>Science</td><td><input className="form-control" name="marksObtained.science" type="number" onChange={handleChange} /></td>
                  <td>English</td><td><input className="form-control" name="marksObtained.english" type="number" onChange={handleChange} /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>Resident - Day Scholar</h3>
        <div className="row g-3">
          <div className="col-md-6"><input className="form-control" name="name" onChange={handleChange} placeholder="Name (in Block letters)" /></div>
          <div className="col-md-6"><input className="form-control" name="fatherName" onChange={handleChange} placeholder="Father's Name & Profession" /></div>
          <div className="col-md-6"><input className="form-control" name="motherName" onChange={handleChange} placeholder="Mother's Name" /></div>
          <div className="col-md-6"><input className="form-control" name="address" onChange={handleChange} placeholder="Address for correspondence" /></div>
          <div className="col-md-6"><input className="form-control" name="localAddress" onChange={handleChange} placeholder="Local Address" /></div>
          <div className="col-md-6"><input className="form-control" name="fatherCellNo" onChange={handleChange} placeholder="Father Cell No" /></div>
          <div className="col-md-6"><input className="form-control" name="studentCellNo" onChange={handleChange} placeholder="Student Cell No" /></div>
        </div>
      </div>

      <div className="form-section">
        <h3>Personal Details</h3>
        <div className="row g-3">
          <div className="col-md-6"><input className="form-control" name="dateOfBirth" type="date" onChange={handleChange} placeholder="Date of Birth" /></div>
          <div className="col-md-6"><input className="form-control" name="placeOfBirth" onChange={handleChange} placeholder="Place of Birth" /></div>
          <div className="col-md-6"><input className="form-control" name="age" type="number" onChange={handleChange} placeholder="Age" /></div>
          <div className="col-md-6"><input className="form-control" name="villageTown" onChange={handleChange} placeholder="Village/Town" /></div>
          <div className="col-md-6"><input className="form-control" name="nationality" onChange={handleChange} placeholder="Nationality" /></div>
          <div className="col-md-6"><input className="form-control" name="motherTongue" onChange={handleChange} placeholder="Mother Tongue" /></div>
          <div className="col-md-6"><input className="form-control" name="religion" onChange={handleChange} placeholder="Religion" /></div>
          <div className="col-md-6">
            <select className="form-control" name="category" onChange={handleChange}>
              <option value="">Select Category</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              <option value="BC">BC</option>
              <option value="Min">Min</option>
              <option value="OC">OC</option>
            </select>
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>Aadhar and Bank Details</h3>
        <div className="row g-3">
          <div className="col-md-6"><input className="form-control" name="aadharDetails.student" onChange={handleChange} placeholder="Student Aadhar" /></div>
          <div className="col-md-6"><input className="form-control" name="aadharDetails.father" onChange={handleChange} placeholder="Father Aadhar" /></div>
          <div className="col-md-6"><input className="form-control" name="aadharDetails.mother" onChange={handleChange} placeholder="Mother Aadhar" /></div>
          <div className="col-md-6"><input className="form-control" name="bankDetails.accountNo" onChange={handleChange} placeholder="Account No" /></div>
          <div className="col-md-6"><input className="form-control" name="bankDetails.bankA/cNo" onChange={handleChange} placeholder="Bank A/c No" /></div>
          <div className="col-md-6"><input className="form-control" name="bankDetails.ifscCode" onChange={handleChange} placeholder="IFSC Code" /></div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary mt-3" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AdmissionForm;
