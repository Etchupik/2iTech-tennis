const fs = require("fs");
const express = require("express");

const app = express();

app.use(express.json());

// app.get("/", (req, res) => {
//   res
//     .status(200)
//     .json({ message: "Hello from the server side!", app: "Natours" });
// });

// app.post("/", (req, res) => {
//   res.send("You can post to this endpoint...");
// });

const players = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/players-simple.json`)
);

app.get("/api/v1/players", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      players,
    },
  });
});

app.post("/api/v1/players", (req, res) => {
  //console.log(req.body);

  const newId = players[players.length - 1].id + 1;
  const newPlayer = Object.assign({ id: newId }, req.body);

  players.push(newPlayer);

  fs.writeFile(
    `${__dirname}/dev-data/data/players-simple.json`,
    JSON.stringify(players),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          player: newPlayer,
        },
      });
    }
  );
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
