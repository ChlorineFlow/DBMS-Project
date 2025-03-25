const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));
// Define a simple route
app.get('/', (req, res) => {
    res.render('index.ejs');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
