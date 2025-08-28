require('dotenv').config();
const path = require('path');
const express = require('express');
const winston = require('winston');

const app = express();
const PORT = process.env.PORT || 3000;

// Winston logger config
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'server.log' }) // optional log file
    ],
});

// Request logger middleware
app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        logger.info(`${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
    });
    next();
});

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Routes
app.get('/', (req, res) => {
    res.status(200).json({ status: 'Hi!' });
});

app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'API running' });
});

app.get('/admin/only/health', (req, res) => {
    res.status(200).json({ status: 'Server running' });
});

// Start server
app.listen(PORT, () => {
    logger.info(`Server is running. Visit http://localhost:${PORT}`);

    // Ping every 1 minute
    setInterval(async () => {
        try {
            const response = await fetch("https://portfolio-page-5kft.onrender.com/");
            logger.info(`Pinged portfolio page: ${response.status}`);
        } catch (error) {
            logger.error(`Error pinging portfolio page: ${error.message}`);
        }
    }, 60 * 1000);
});
