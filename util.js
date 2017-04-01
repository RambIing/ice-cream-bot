const path = require("path");
const fs = require("fs");

function readJSONFile(filePath, type)
{
  let data = JSON.parse(fs.readFileSync(filePath, type));
  return data;
}

function getEnabled(command)
{
  let fileData = readJSONFile(path.join(__dirname+ "/commands.json"), "utf-8");
  return fileData[command].enabled;
}

exports.readJSONFile = readJSONFile;
exports.getEnabled = getEnabled;
