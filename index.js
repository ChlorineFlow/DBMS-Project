const express = require('express');
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static('public'));
// Set the view engine to EJS
app.set("view engine", "ejs");

// Serve static files (CSS, JS, images)app.use(express.static(path.join(__dirname, "public")));
// Define a simple route
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
