const fs = require("fs");

console.time();

fs.readFile("../emails.json", { encoding: "utf-8" }, function (err, data) {
  const list = JSON.parse(data);
  const emails = list.map((item) => item.email).filter((item) => item);

  const chunkSize = 100;
  let index = 1;
  for (let i = 0; i < emails.length; i += chunkSize) {
    const chunk = emails.slice(i, i + chunkSize);
    fs.writeFileSync("./trash/" + index + ".js.json", JSON.stringify(chunk));
    index++;
  }
});

console.timeEnd();
