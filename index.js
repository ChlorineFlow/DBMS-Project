const express = require('express');
const app = express();
const port = 3000;
const path = require("path");

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, "public")));

// Serve the media folder (for the logo)
app.use('/media', express.static(path.join(__dirname, "views", "media")));

// Set the view engine to EJS
app.set("view engine", "ejs");

// Define routes
app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/student_login', (req, res) => {
    res.render('student_login.ejs');
});

app.get('/faculty_login', (req, res) => {
    res.render('faculty_login.ejs');
});

app.get('/admin_login', (req, res) => {
    res.render('admin_login.ejs');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
