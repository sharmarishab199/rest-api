const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/rishab', (req, res) => {
    try {
        // Extract data array from request body
        const { data } = req.body;

        const user_id = "rishabSharma_21109911157";

        const response = {
            is_success: true,
            user_id: user_id,
            email: "rishab1157.be21@chitkara.edu.in",
            roll_number: "2110991157",
            even_numbers: [],
            odd_numbers: [],
            alphabets: []
        };

        data.forEach(item => {
            if (!isNaN(item)) {
                if (item % 2 === 0) {
                    response.even_numbers.push(item);
                } else {
                    response.odd_numbers.push(item);
                }
            } else {
                if (item.match(/[a-zA-Z]/)) {
                    response.alphabets.push(item.toUpperCase());
                }
            }
        });

        // Send the response
        res.json(response);
    } catch (error) {
        res.status(500).json({ is_success: false, error: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
