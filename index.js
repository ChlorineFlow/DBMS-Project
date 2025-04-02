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

app.get('/student_details', (req, res) => {
    res.render('student_detail.ejs');
});

app.get('/student_details/attendance', (req, res) => {
    res.render('attendance.ejs');
});

app.get('/student_details/academia', (req, res) => {
    res.render('academia.ejs');
});

app.get('/student_details/student_course_feedback', (req, res) => {
    res.render('student_course_feedback.ejs');
});

app.get('/faculty_details', (req, res) => {
    res.render('faculty_detail.ejs');
});

app.get('/faculty_details/faculty_achievements', (req, res) => {
    res.render('faculty_achievements.ejs');
});

app.get('/faculty_details/courses_handled', (req, res) => {
    res.render('courses_handled.ejs');
});

app.get('/faculty_details/finance_updates', (req, res) => {
    res.render('finance_updates.ejs');
});

app.get('/admin_details', (req, res) => {
    res.render('admin_detail.ejs');
});

app.get('/admin_details/vigilance', (req, res) => {
    res.render('vigilance.ejs');
});

app.get('/admin_details/detention_list', (req, res) => {
    res.render('detention_list.ejs');
});

app.get('/admin_details/mess_details', (req, res) => {
    res.render('mess.ejs');
});

app.get('/admin_details/hostel_details', (req, res) => {
    res.render('hostel.ejs');
});

app.get('/admin_details/complaint_log', (req, res) => {
    res.render('complaint.ejs');
});

app.get('/admin_details/infrastructure_details', (req, res) => {
    res.render('infrastructure.ejs');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
