const express = require('express');
const hbs = require('hbs');

var app = express();
app.set('view engine', 'hbs'); // set view engine to hbs
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Following is the handler for HTTP get requests
app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear(),
    welcomeNote: 'Welcome to Our Website About Node.JS.'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()// return current year(2017)
  }) // let you render any of the template you have setup with your view engine. Views directory are default(no need to mention here). But you can overrite it
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'OOPs Page not found'
  });
});


app.listen(port, () => {
  console.log('Server is running on port 3000');
});
