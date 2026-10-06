📚 Bookstore — MERN Stack

A full-stack Bookstore Web Application built using the MERN stack. The application provides a platform for managing and browsing books, with Firebase Authentication for secure user authentication and an admin panel for book management.

🚀 Features

👤 Authentication

* User authentication using Firebase Authentication
* Secure login and registration
* Authentication-based access to application features

📖 Book Management

* Browse available books
* View book information
* Manage books through the admin panel
* Add new books
* Update existing books
* Delete books

🛠️ Admin Panel

* Dedicated admin interface
* Manage the bookstore’s book inventory
* Perform CRUD operations on books

🧑‍💻 Tech Stack

Frontend

* React.js — UI development
* HTML5
* CSS3
* JavaScript

Backend

* Node.js
* Express.js
* REST APIs

Database

* MongoDB
* Mongoose

Authentication

* Firebase Authentication

Development Tools

* Git & GitHub
* Postman
* npm

🏗️ Project Architecture

                    ┌──────────────────┐
                    │      User        │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │   React.js       │
                    │    Frontend      │
                    └────────┬─────────┘
                             │
                      REST API Requests
                             │
                             ▼
                    ┌──────────────────┐
                    │  Node.js +       │
                    │  Express.js      │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │     MongoDB      │
                    │    Database      │
                    └──────────────────┘
                    ┌──────────────────┐
                    │ Firebase Auth    │
                    │ Authentication   │
                    └──────────────────┘

📂 Project Structure

Bookstore/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── App.jsx
│       └── main.jsx
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── .gitignore
└── README.md

The exact folder structure may vary depending on the implementation.

⚙️ Installation & Setup

1. Clone the Repository

git clone <your-repository-url>
cd Bookstore

2. Install Frontend Dependencies

cd frontend
npm install

3. Install Backend Dependencies

Open another terminal:

cd backend
npm install

4. Configure Environment Variables

Create a .env file inside the backend directory.

PORT=5000
MONGO_URI=your_mongodb_connection_string

Add the required Firebase configuration to your frontend according to your Firebase project setup.

Do not commit your .env file to GitHub.

5. Start the Backend

cd backend
npm run dev

Or, if the project uses the standard Node start script:

npm start

6. Start the Frontend

cd frontend
npm run dev

The application will then be available on the local development URL shown by Vite.

🔄 Application Flow

User
  │
  ▼
React Frontend
  │
  ├── Authentication ──► Firebase
  │
  └── API Request
          │
          ▼
     Express Server
          │
          ▼
       MongoDB
          │
          ▼
     API Response
          │
          ▼
     React UI

🔐 Authentication

The application uses Firebase Authentication for user authentication.

The general authentication flow is:

1. User enters their login/register details.
2. Firebase handles authentication.
3. Authentication state is maintained on the frontend.
4. Authenticated users can access the appropriate application functionality.
5. Admin functionality is restricted to authorized users.

📡 API

The backend follows a RESTful API architecture.

Typical operations include:

Method	Purpose
GET	Retrieve books
POST	Add a new book
PUT	Update a book
DELETE	Delete a book

The exact API endpoints depend on the implementation.

🗄️ Database

The application uses MongoDB as its database.

Book information is stored as documents in MongoDB, with Mongoose used to define schemas and interact with the database.

Example conceptual book structure:

{
  title: "Book Title",
  author: "Author Name",
  price: 499,
  description: "Book description",
  image: "book-image-url"
}

The actual fields depend on the schema implemented in the project.

🛡️ Security

The project follows common security practices such as:

* Firebase-based authentication
* Environment variables for sensitive configuration
* Backend API separation
* Database access through Mongoose
* .env excluded from version control

🧪 Testing APIs

Backend APIs can be tested using Postman.

You can test:

GET     → Fetch books
POST    → Create book
PUT     → Update book
DELETE  → Delete book

🎯 Learning Objectives

This project helped in understanding and implementing:

* MERN stack development
* React component-based architecture
* REST API development
* Express.js backend development
* MongoDB database operations
* Mongoose
* Firebase Authentication
* CRUD operations
* Admin panel development
* Frontend-backend communication

🔮 Future Improvements

Possible future enhancements include:

* 🛒 Shopping cart
* 💳 Online payment integration
* 📦 Order management
* ⭐ Book reviews and ratings
* 🔎 Advanced book search and filtering
* ❤️ Wishlist
* 📊 Admin analytics dashboard
* 📧 Email notifications
* ☁️ Cloud image storage
* 📱 Improved mobile responsiveness

👨‍💻 Author

Prajwal Kamboj

Full Stack / MERN Stack Developer

⸻

⭐ If you found this project useful, consider giving the repository a star!
