// server dependencies
cd mern-auth
npm install

// client dependencies
cd client
npm install

// mongosh - open new terminal window
mongosh
use myDb

// nodemon - open new terminal window
nodemon run server

// react client - open new terminal window
npm start dev



- MongoDB is locally hosted, until the initial run it contains no user accounts - create an account to proceed
- DB can be exposed easily through Postman using: POST http://localhost:5000/api/users/register