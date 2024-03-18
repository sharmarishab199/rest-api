// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of Express app
const app = express();

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Define the POST route for /bfhl
app.post('/vinay', (req, res) => {
    try {
        // Extract data array from request body
        const { data } = req.body;

        // Generate user_id (replace with your own full name and date of birth)
        const user_id = "vinay_singla_2110991994";

        // Initialize response object
        const response = {
            is_success: true,
            user_id: user_id,
            email: "vinay1994.be21@chitkara.edu.in",
            roll_number: "2110991994",
            even_numbers: [],
            odd_numbers: [],
            alphabets: []
        };

        // Loop through the data array
        data.forEach(item => {
            // Check if item is a number
            if (!isNaN(item)) {
                // If number is even, push to even_numbers array
                if (item % 2 === 0) {
                    response.even_numbers.push(item);
                } else { // If number is odd, push to odd_numbers array
                    response.odd_numbers.push(item);
                }
            } else { // If item is not a number, check if it's an alphabet
                if (item.match(/[a-zA-Z]/)) {
                    response.alphabets.push(item.toUpperCase());
                }
            }
        });

        // Send the response
        res.json(response);
    } catch (error) {
        // If an error occurs, send error response
        res.status(500).json({ is_success: false, error: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
