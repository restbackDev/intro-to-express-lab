// Import Express
const express = require('express');

// Create an Express app
const app = express();
/*
// 1. Be Polite, Greet the User 
app.get('/greetings/:name', (req,res) => {
  res.send(`Hello there, ${req.params.name}`);
});
 
// 2. Rolling the Dice
app.get('/roll/:number', (req,res) => {
  let num = req.params.number;
  num = parseInt(num); //converts num w/c is currently a string into a number

  if (Number.isInteger(num) == true) {
    res.send(` You roll a ${num}`);
  }else {
    res.send(`You must specify a number.`);
  }
});

// 3. I Want THAT One!
app.get('/collectibles/:item', (req,res) => {
  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  let index = req.params.item;
  if (index > collectibles.length) {
    res.send("This item is not yet in stock. Check back soon!")
  }else {
    res.send(`So you want the ${collectibles[item].name}?, for ${collectibles[item].price}, it can be yours!`);
  }

});

//Using Parameters
app.get('/hello', (req,res) => {
  res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`);
});

//copy&paste URL: localhost:3000/hello?name=Christy&age=32
*/

// 4. Filter Shoes by Query Parameters
const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes/:soles', (req,res) => {
  let setShoe = req.params.soles;
  let data =[]
  
  //type
  for(let i = 0; i< shoes.length; i++) {
    if (setShoe === shoes[i].type) {
      data.push(shoes[i].name)
    }
  }
  res.send(`${data}`)
});




app.listen(3000, () => {
  console.log('Listening on port 3000')
});

console.log('Hello Testing')