const express = require('express');
const app = express();
const port = 3000;

// Simulate an asynchronous operation (e.g., database query)
function asyncMiddleware(req, res, next) {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      // Simulate an error
      const error = new Error('Simulated database error');
      next(error);
    } else {
      // Simulate success
      req.data = { message: 'Success!' };
      next();
    }
  }, 1000);
}

app.get('/', asyncMiddleware, (req, res, next) => {
  // Handle success response
  if (req.data) {
    res.send(req.data);
  } else {
    // Should not happen if asyncMiddleware works properly, but handle for safety
    res.status(500).send('Internal Server Error');
  }
});

app.use((err, req, res, next) => {
  // Express error handler middleware
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});