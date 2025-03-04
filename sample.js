//2
app.get('/roll/:limit', (req, res) => {
  if (!Number.isInteger(parseInt(req.params.limit))) {
    res.send('You must specify a valid number.');
  } else {
    const result = Math.floor(Math.random() * parseInt(req.params.limit));
    res.send(`You rolled a ${result}.`)
  }
});

//2 my version no random
app.get('/roll/:number', (req,res) => {
  let num = req.params.number;
  num = parseInt(num); //converts num w/c is currently a string into a number
  
  if (Number.isInteger(num) == true) {
    res.send(` You roll a ${num}`);
  }else {
    res.send(`You must specify a number.`);
  }
});



//4 Excercise

app.get("/shoes", (req, res) => {
  let minPrice = req.query["min-price"];
  let maxPrice = req.query["max-price"];
  let type = req.query.type;

  let filteredShoes = [...shoes]; // Start with full shoe list

  // Convert prices to numbers and validate
  if (minPrice !== undefined) {
    minPrice = parseFloat(minPrice);
    if (isNaN(minPrice)) return res.send("min-price must be a number.");
    filteredShoes = filteredShoes.filter((shoe) => shoe.price >= minPrice);
  }

  if (maxPrice !== undefined) {
    maxPrice = parseFloat(maxPrice);
    if (isNaN(maxPrice)) return res.send("max-price must be a number.");
    filteredShoes = filteredShoes.filter((shoe) => shoe.price <= maxPrice);
  }

  if (type) {
    filteredShoes = filteredShoes.filter(
      (shoe) => shoe.type.toLowerCase() === type.toLowerCase()
    );
  }

  res.json(filteredShoes);
});
