const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/process_form', (req, res) => {
    const { name, email, message } = req.body;

    // Here you can add code to process the form data
    // For example, you might want to send an email, save the data to a database, etc.

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    res.send('Form submitted successfully.');
});

app.listen(3000, () => console.log('Server is running on port 3000'));