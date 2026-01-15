# Cinematch
Movie Recommendation system
Cinematch is a full-stack MERN application that provides intelligent movie recommendations along with ratings, OTT platform availability, supported languages, reviews, and user comments.
The project is designed for both academic evaluation and real-world usability.

Project Overview
Cinematch combines live movie data from the TMDB API with user-generated content stored in MongoDB.
It allows users to discover movies based on mood, view detailed metadata, and understand where a movie can be legally streamed.

Features
Movie discovery using TMDB API
Mood-based movie recommendations
Ratings and vote counts
OTT platform availability information
Responsive user interface
Full MERN stack architecture
Secure handling of environment variables
Technology Stack

Frontend
React.js
CSS 
Axios

Backend
Node.js
Express.js
TMDB API integration
Database
MongoDB Atlas

Tools
Git and GitHub
Visual Studio Code


Installation and Setup
1. Clone the Repository
git clone https://github.com/Anarghya07/Cinematch.git
cd Cinematch

2. Backend Setup
cd backend
npm install

Create a .env file in the backend directory:
PORT=5000
TMDB_KEY=your_tmdb_api_key
MONGO_URI=your_mongodb_connection_string

Start the backend server:
node server.js

3. Frontend Setup
cd frontend
npm install
npm run dev


The frontend runs at:
http://localhost:5173


The backend runs at:
http://localhost:5000

API Workflow
The frontend sends requests to the backend
The backend fetches data from the TMDB API
Data is processed and returned as structured JSON
The frontend renders movie details and OTT availability

Current Limitations
No user authentication implemented
Recommendation logic is rule-based
Dependency on TMDB API rate limits
Future Enhancements
JWT-based authentication
Machine learning based personalized recommendations
User profiles and watchlists
Performance optimization using caching
Deployment with cloud services
Academic Relevance

This project demonstrates:
Full stack web development using MERN
RESTful API design
Database integration and persistence
Scalable application architecture
UI and UX design principles

Suitable for:
M.Tech Mini Project
Full Stack Development coursework
Technical viva and evaluation

Author
Anarghya
Sowjanya
lalitha
M.Tech – Computer Science

GitHub: https://github.com/Anarghya07

License
This project is intended for educational purposes only.
