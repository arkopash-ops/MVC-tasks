# MVC Task Manager

A simple Task Manager application built using Node.js, Express, MongoDB, and EJS following the MVC (Model-View-Controller) architecture.

## Features

- Create tasks
- View all tasks
- Delete tasks
- MVC folder structure
- MongoDB database integration

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS

## Project Structure

```
mvc-task-manager/
│
├── models/
│   └── task.model.js
├── views/
│   ├── index.ejs
│   └── tasks.ejs
├── controllers/
│   └── task.controller.js
├── routes/
│   └── task.route.js
├── node_modules/
├── app.js
├── package.json
├── .gitignore
└── README.md
```

## Installation

1. Clone the repository

```bash
git clone https://github.com/arkopash-ops/MVC-tasks.git
cd mvc-task-manager
```

2. Install dependencies

```bash
npm install
```

3. Start MongoDB (Make sure MongoDB is running locally)

4. Run the application

```bash
node app.js
```

Or if using nodemon:

```bash
npx nodemon app.js
```

5. Open in browser

```
http://localhost:5000
```

## MVC Architecture Overview

- **Model** – Handles database logic (Mongoose schemas)
- **View** – EJS templates for UI
- **Controller** – Application logic
- **Routes** – URL routing

## Future Improvements

- User authentication
- Task categories
- Due dates
- REST API version
- Deployment

## License

This project is licensed under the MIT License.
