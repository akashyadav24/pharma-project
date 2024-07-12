// errorLogger.js
const fs = require('fs');
const path = require('path');

// Function to log errors to a file
function ErrorLogger(err, req, res, next) {
    // Log the error to a file
    const logFilePath = path.join(__dirname, 'error.log');
    const logMessage = `[${new Date().toISOString()}] ${err.stack}\n`;
    fs.appendFile(logFilePath, logMessage, err => {
        if (err) {
            console.error('Error writing to error log:', err);
        }
    });

    // Proceed to the next middleware
    next();
}

module.exports = ErrorLogger;
