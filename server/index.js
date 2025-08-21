
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// TODO: Add your middleware


//TODO: Add your routes


app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'API running' });
});

app.get('/admin/only/health', (req, res) => {
    res.status(200).json({ status: 'Server running'});
});

app.listen(PORT, () => {
    console.log(`Server is running.\nVisit http://localhost:${PORT} to access the application.`);
});
