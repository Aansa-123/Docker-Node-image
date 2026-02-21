import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json([
    {
      'message': 'Hello, My World 1!',
      'info': 'This is a simple Express server running in a Docker container.',
      'notes': 'Feel free to modify the code and add more routes!',
      'version': '1.0.0'
    },
    {
      'message': 'Hello, My World 2!',
      'info': 'This is a simple Express server running in a Docker container.',
      'notes': 'Feel free to modify the code and add more routes!',
      'version': '2.0.0'
    },
    {
      'message': 'Hello, My World 3!',
      'info': 'This is a simple Express server running in a Docker container.',
      'notes': 'Feel free to modify the code and add more routes!',
      'version': '3.0.0'
    }
  ]);
});

app.listen(3000, () => {
  console.log(`Server is running at port http://localhost:${3000}`);
});