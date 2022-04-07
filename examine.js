import fs from "fs";
import rl from "readline-sync";

let database = JSON.parse(fs.readFileSync("database.json", "utf-8"));
let labelled = JSON.parse(fs.readFileSync("labelled.json", "utf-8"));

let i = labelled.sequence_index;

while (true) {
  process.stdout.write(database[i].text + "\n");
  const tags = rl.question("Tags? > ");
  let newObject = { tweet: database[i] };

  if (tags === "stop" || tags === "exit") {
    break;
  }
  newObject.tags = tags;
  const sentiment = rl.question("Sentiment? > ");
  if (sentiment === "negative" || sentiment === "neg" || sentiment === "false") {
    newObject.sentiment = false;
  } else if (sentiment === "positive" || sentiment === "pos" || sentiment === "true") {
    newObject.sentiment = true;
  } else {
    newObject.sentiment = sentiment;
  }

  labelled.data.push(newObject);
  i += 1;
}

fs.writeFileSync(
  "labelled.json",
  JSON.stringify({
    sequence_index: i,
    data: labelled.data,
  }),
);

process.exit(0);
