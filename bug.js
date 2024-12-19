const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Uncommon bug: Inconsistent handling of asynchronous operations within middleware.
// Scenario: Asynchronous middleware function doesn't properly handle errors or doesn't use callbacks / promises correctly.