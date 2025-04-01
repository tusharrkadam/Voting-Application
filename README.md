Voting Application: (Backend)

This is a backend application for a voting system where users can vote for candidates. 
It provides functionalities for user authentication, candidate management, and voting.

Features:

User sign up and login with Aadhar Card Number and password
User can view the list of candidates
User can vote for a candidate (only once)
Admin can manage candidates (add, update, delete)
Admin cannot vote
Technologies Used
Node.js
Express.js
MongoDB
JSON Web Tokens (JWT) for authentication

Installation
Clone the repository:



API Endpoints
Authentication
Sign Up

POST /signup – Sign up a new user

Login

POST /login – Authenticate a user

Candidates Management
Get Candidates

GET /candidates – Retrieve the list of candidates

Add Candidate (Admin only)

POST /candidates – Add a new candidate

Update Candidate (Admin only)

PUT /candidates/:id – Update candidate details by ID

Delete Candidate (Admin only)

DELETE /candidates/:id – Remove a candidate by ID

Voting
Get Vote Count

GET /candidates/vote/count – Get the total votes for each candidate

Vote for a Candidate (User only)

POST /candidates/vote/:id – Vote for a specific candidate

User Profile
Get Profile

GET /users/profile – Retrieve user profile information

Change Password

PUT /users/profile/password – Update user password

