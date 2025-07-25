# Student Admission Application

A modern web-based system designed to streamline the admission process for intermediate (I/II year) students at educational institutions. This full-stack JavaScript application provides a user-friendly interface for entering student details, managing records, and viewing individual student information.

## 🚀 Features

- **Student Registration**: Comprehensive admission form mirroring physical applications
- **Record Management**: View all registered students in a structured table format
- **Detailed View**: Access complete student information with a single click
- **Responsive Design**: Bootstrap-powered UI that works across all devices
- **Secure Storage**: MongoDB Atlas cloud database integration
- **Unique Identification**: Automatic admission number generation

## 🛠️ Technologies Used

### Frontend
- **ReactJS with Vite** - Fast and efficient framework for building dynamic user interfaces
- **Bootstrap** - CSS framework for responsive and aesthetically pleasing design
- **React Router** - Client-side navigation between pages
- **Axios** - HTTP client for API requests

### Backend
- **Express.js** - Minimalist web framework for Node.js
- **Mongoose** - MongoDB object modeling for Node.js

### Database
- **MongoDB Atlas** - Cloud-based NoSQL database for secure data storage

## 📁 Project Structure

```
student-admission-app/
├── client/                 # Frontend (ReactJS with Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/          # AdmissionForm, StudentList, StudentDetail
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── vite.config.js
│   └── package.json
├── server/                 # Backend (Express)
│   ├── models/             # Student.js (Mongoose schema)
│   ├── routes/             # studentRoutes.js (API endpoints)
│   ├── app.js              # Main server file
│   └── package.json
├── .env                    # Environment variables (not uploaded)
└── README.md
```

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 14 or higher) - [Download here](https://nodejs.org/)
- **MongoDB Atlas Account** - [Sign up here](https://mongodb.com)
- **Git** (optional, for cloning) - [Install here](https://git-scm.com/)

## 📥 Installation

### 1. Clone or Download the Repository

**Option A: Clone via Git**
```bash
git clone https://github.com/your-username/student-admission-app.git
cd student-admission-app
```

**Option B: Download ZIP**
- Download the ZIP file from the repository
- Extract it to your desired location
- Navigate to the extracted folder

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../client
npm install
```

### 4. Configure Environment Variables

1. Create a `.env` file in the `server` directory
2. Add your MongoDB Atlas connection string:

```env
MONGO_URI=your_mongodb_atlas_connection_string
```

⚠️ **Important**: Ensure `.env` is added to `.gitignore` to prevent uploading sensitive data.

## 🚀 Running the Application

### Start the Backend Server

```bash
cd server
node app.js
```

The server will start on `http://localhost:5000`

### Start the Frontend Development Server

```bash
cd client
npm run dev
```

Open `http://localhost:5173` in your browser

## 📖 Usage

### Adding a Student
1. Navigate to the home page (`http://localhost:5173`)
2. Fill out the comprehensive admission form with student details
3. Click **Submit** to save the record to the database

### Viewing Students
1. Navigate to the **Student List** page (`/students`)
2. View all registered students in a structured table
3. See essential information: Admission Number, Name, and Group

### Viewing Student Details
1. From the Student List, click on any student row
2. Access the detailed view (`/students/:id`) showing complete information
3. Review all submitted data including personal, academic, and contact details

## 🔄 Application Workflow

1. **Form Submission**: Users fill out the admission form with validation
2. **Data Processing**: Backend receives and validates form data
3. **Database Storage**: Student records stored in MongoDB Atlas with unique admission numbers
4. **Record Retrieval**: API endpoints serve student data to frontend components
5. **Display**: React components render student information in user-friendly formats

## 🌐 API Endpoints

- `POST /api/students` - Create a new student record
- `GET /api/students` - Retrieve all student records
- `GET /api/students/:id` - Retrieve specific student details

## 🤝 Contributing

1. Fork the repository
2. Create a new feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
