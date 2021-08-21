const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! I added some text to see the effect of the commit on the continuous integration pipline set up on AWS.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
