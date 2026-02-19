import express from 'express';

const app = express();

app.get('/', (req, res) => {
res.send({
'message': 'Hello, World!',
'info': 'This is a simple Express server running in a Docker container.',
'notes': 'Feel free to modify the code and add more routes!',
'version': '2.0.0'
},{
'message': 'Hello, World!',
'info': 'This is a simple Express server running in a Docker container.',
'notes': 'Feel free to modify the code and add more routes!',
'version': '2.0.0'
},
{
'message': 'Hello, World!',
'info': 'This is a simple Express server running in a Docker container.',
'notes': 'Feel free to modify the code and add more routes!',
'version': '3.0.0'
}
);

 
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});