const express = require('express');
const PORT = 3000;
const app = express();

app.listen(PORT, () =>
  console.info(`\n App is running on localhost:${PORT} \n`),
);
