const express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Following is the handler for HTTP get requests
app.get('/', (req, res) => {

  //res.send('<h1>Hello Express</h1>');
  res.send({
    name: 'Shahmir Khan Jadoon',
    hobbies: ['Swimming', 'Sports', 'Programming', 'Coding']
  })
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>')
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'OOPs Page not found'
  });
});


app.listen(port, () => {
  console.log('Server is running on port 3000');
});
