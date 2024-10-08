const express = require('express');
const app = express();

// total variable to store the result of the calculations
let total = 0;

// route to get the total
app.get('/calculator', (req, res) => {
    res.status(200).json({ total });
});

// middleware to parse JSON data
app.use(express.json());

// routes below
app.post('/calculator', (req, res) => {
    // extract number and operation from request
    const number = req.body.number
    const operation = req.body.operation
    // apply operation to total
    if (operation === 'add') {
        total += number;
    } else if (operation === 'subtract') {
        total -= number;
    } else if (operation === 'multiply') {
        total *= number;
    } else if (operation === 'divide') {
        total /= number;
    } else {
        return res.status(400).json({ error: 'Invalid operation' });
    }
    // send back the updated total
    res.status(200).json({ total })
});

app.delete('/calculator', (req, res) => {
    // reset the total to 0
    total = 0;
    // send back the updated total
    res.status(204).json({ total });
})

// start the server
app.listen(4000, () => {
    console.log('Server listening on port 4000');
})