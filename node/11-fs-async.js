const { readFile, writeFile } = require("fs");

readFile("../content/first.txt", "utf-8", (err, res) => {
  if (err) console.log(err);
  const first = res;

  readFile("../content/second.txt", "utf-8", (err, res) => {
    if (err) console.log(err);
    const second = res;

    writeFile(
      "../content/result-async.txt",
      `This is the result: ${first} ${second} `,
      { flag: "a" },
      err => console.log(err)
    );
  });
});
