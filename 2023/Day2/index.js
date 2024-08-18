const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) return console.error(err);
  //removes spaces, Game #:, and creates an array
  const arr = data.replace(/Game ([1-9]|[1-9][0-9]|100):/g, "").split("\n");

  console.log(`Part 1 Answer: ${partOne(arr)}`);
  console.log(`Part 2 Answer: ${partTwo(arr)}`);
});

const playedGames = [];

const maxRed = 12;
const maxGreen = 13;
const maxBlue = 14;

function partOne(games) {
  var gameId = 0;
  var sum = 0;
  games.map((game) => {
    gameId++;
    var gameNotPossible = false;
    game.split(";").forEach((subGame) => {
      subGame.split(",").forEach((pull) => {
        [tmp, count, color] = pull.replace("\r", "").split(" ");
        if (color === "red" && count > maxRed) {
          gameNotPossible = true;
          return;
        }
        if (color === "green" && count > maxGreen) {
          gameNotPossible = true;
          return;
        }
        if (color === "blue" && count > maxBlue) {
          gameNotPossible = true;
          return;
        }
      });
      if (gameNotPossible) {
        return;
      }
    });

    if (!gameNotPossible) {
      sum += gameId;
    }
  });
  return sum;
}

function partTwo(games) {
  var sum = 0;

  games.map((game) => {
    const colors = {
      red: 0,
      green: 0,
      blue: 0,
    };
    game
      .replaceAll(";", ",")
      .split(",")
      .forEach((el) => {
        const [count, color] = el.trim().split(" ");
        if (parseInt(count) > colors[color]) {
          colors[color] = count;
        }
      });
    var temp = colors.red * colors.green * colors.blue;
    sum += temp;
  });
  return sum;
}
