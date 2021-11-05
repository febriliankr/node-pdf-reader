const path = "abstract.pdf";
const fs = require("fs");

const { PdfReader } = require("pdfreader");

const currentTime = new Date().getTime();

async function main() {
  const arr = [];
  const read = new PdfReader();

  read.parseFileItems(path, async function (err, item) {
    if (err) callback(err);
    else if (!item) callback();
    else if (item.text) {
      await WriteText(item.text + "\n");
    }
  });

  arr.map((text) => {
    WriteText(text);
  });
}
main();

function callback(err = null) {
  if (err) console.error(err);
  else console.log("Done");
}

function WriteText(text) {
  fs.appendFileSync(`./result_${currentTime}.md`, text, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
}
