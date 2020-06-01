import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  response.json(['TypeScript', 'Nodejs', 'React.js', 'React Native']);
});

app.listen(3333);
