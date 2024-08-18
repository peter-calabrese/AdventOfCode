const fs = require("fs");

fs.readFile("testInput.txt", "utf-8", (err, data) => {
  if (err) return console.error(err);
  arr = data.split("\n");
  console.log(partOne(arr));
});

function partOne(data) {
  var nums = [];
  data.map((row, outerIndex) => {
    var numbers = "";
    row.split("").forEach((char, innerIndex) => {
      if (parseInt(char) != char && numbers !== "") {
        nums.push(numbers);
        return (numbers = "");
      }
      numbers += char;
    });
    console.log(nums);
  });

  console.log(data);
}

/*
TODO:
Take the character and parse int with index
if a symbol, add the index of the symbol to another array
*/
