const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML file for the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define a route to handle credit card validation
app.post('/validate', (req, res) => {
    const { cardNumber, expiryDate, cvv } = req.body;

    // Validation logic
    const today = new Date();
    const currentYear = today.getFullYear() % 100;
    const currentMonth = today.getMonth() + 1;

    const cardIsValid =
        cardNumber.length >= 16 && cardNumber.length <= 19 &&
        (cvv.length === 3 || (cardNumber.startsWith('34') || cardNumber.startsWith('37')) && cvv.length === 4) &&
        (/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) &&
        (parseInt(expiryDate.split('/')[1]) > currentYear ||
            (parseInt(expiryDate.split('/')[1]) === currentYear && parseInt(expiryDate.split('/')[0]) >= currentMonth));

    if (cardIsValid) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
