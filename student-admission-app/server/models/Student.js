const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fatherName: { type: String, required: true },
  fatherProfession: String,
  motherName: String,
  address: String,
  localAddress: String,
  fatherCellNo: String,
  studentCellNo: String,
  dateOfBirth: Date,
  placeOfBirth: String,
  age: Number,
  villageTown: String,
  nationality: String,
  motherTongue: String,
  religion: String,
  category: { type: String, enum: ['SC', 'ST', 'BC', 'Min', 'OC'] },
  aadharDetails: {
    student: String,
    father: String,
    mother: String
  },
  bankDetails: {
    accountNo: String,
    bankAccountNo: String, // fixed field name (was bankA/cNo)
    ifscCode: String
  },
  group: String,
  medium: String,
  secondLanguage: String,
  totalMarksSSC: Number,
  marksObtained: {
    maths: Number,
    science: Number,
    english: Number
  },
  admissionNo: { type: String, unique: true }
});

module.exports = mongoose.model('Student', studentSchema);
