const path = require("path");
const fs = require("fs");

const glob = require("glob");

const PAGE_PATH = path.resolve(__dirname, "../src/pages");
// console.log(PAGE_PATH);

let entryFiles = glob.sync(PAGE_PATH + "/*");
let arr = entryFiles.map((v) => {
  return `${v.slice(v.lastIndexOf("/") + 1)}`;
});
const s = "exports.pages = " + JSON.stringify(arr);
fs.writeFile(path.resolve(__dirname, "../build/index.js"), s, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("目录写入成功！");
});
