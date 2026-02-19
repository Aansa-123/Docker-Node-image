import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send([
    {'message': 'Hello, World!'},
    {'message': 'This is a simple Express server running in a Docker container.'},
    {'message': 'Feel free to modify the code and add more routes!'},
    {'message': 'version: 2.0.0'}
  ].join('\n'));
 
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});