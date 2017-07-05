const express = require('express');
const hbs = require('hbs');

var app = express();
hbs.registerPartials(__dirname + '/views/partials'); // Register Partials
app.set('view engine', 'hbs'); // set view engine to hbs
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// app.use( (req, res, next) => {
//   var now = new Date().toString(); // gives human readable timestamp
//   console.log(`${now}: `);
//
//   next();
// });

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('Upsize', (text) => {
  return text.toUpperCase();
});

// Following is the handler for HTTP get requests
app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeNote: 'Welcome to Our Website About Node.JS.'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
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
