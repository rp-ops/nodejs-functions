const express = require('express');
//const { resolve } = require('path');

const app = express();

app.use(express.static('static'));

function getWelcomeMessage() {
  return 'Welcome to our Service!';
}

function getUserName(username) {
  return 'Hello, ' + username + '!';
}

function checkPassword(password) {
  let result;
  if (password.length > 15) {
    result = 'strong';
  } else {
    result = 'weak';
  }
  return 'Password is ' + result;
}

function getSum(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

function checkSubscription(username, isSubscribed) {
  let result;
  if (isSubscribed) {
    result = username + ' is subscribed ';
  } else {
    result = username + ' is not subscribed ';
  }
  return result;
}

function getDiscount(price, discount) {
  return price - (price * discount) / 100;
}

function greeting(age, gender, name) {
  return `Hello, ${name}! You are a ${age} year old ${gender}.`;
}

function calculatePrice(price, discount, tax) {
  let discountedPrice = price - price * (discount / 100);
  let finalPrice = discountedPrice + discountedPrice * (tax / 100);
  return finalPrice;
}

function getExerciseTime(running, cycling, swimming) {
  return running + cycling + swimming;
}

app.get('/welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

app.get('/greet', (req, res) => {
  let username = req.query.username;
  res.send(getUserName(username));
});

app.get('/check-password', (req, res) => {
  let password = req.query.password;
  res.send(checkPassword(password));
});

app.get('/sum', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);

  res.send(getSum(num1, num2));
});

app.get('/subscription-status', (req, res) => {
  let username = req.query.username;
  let isSubscribed = req.query.isSubscribed === 'true';

  res.send(checkSubscription(username, isSubscribed));
});

app.get('/discounted-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);

  res.send(getDiscount(price, discount).toString());
});

app.get('/personalized-greeting', (req, res) => {
  let age = req.query.age;
  let gender = req.query.gender;
  let name = req.query.name;

  res.send(greeting(age, gender, name).toString());
});

app.get('/final-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);

  res.send(calculatePrice(price, discount, tax).toString());
});

app.get('/total-exercise-time', (req, res) => {
  let runningTime = parseFloat(req.query.running);
  let cyclingTime = parseFloat(req.query.cycling);
  let swimmingTime = parseFloat(req.query.swimming);

  res.send(getExerciseTime(runningTime, cyclingTime, swimmingTime).toString());
});

PORT = 3000;
app.listen(PORT, () => {
  console.log('Example app listening at http://localhost' + PORT);
});
