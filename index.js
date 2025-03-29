const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));
// Define a simple route
app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/about', (req, res) => {
    res.render('about.ejs');
});

app.get('/student', (req, res) => {
    res.render('student.ejs');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
