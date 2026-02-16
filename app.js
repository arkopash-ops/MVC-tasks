const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

const PORT = 5000;

mongoose.connect("mongodb://localhost:27017/task-manager")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Error connecting to MongoDB: ", err));

const taskRoutes = require('./routes/task.route');
app.use('/', taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
