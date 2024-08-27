const express = require('express');
const app = express();

let total = 0;
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

app.listen(4000, () => {
    console.log('Server listening on port 4000');
});

