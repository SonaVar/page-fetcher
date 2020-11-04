const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const filePath = process.argv[3];

function getFilesizeInBytes(filename) {
  const stats = fs.statSync(filename);
  const fileSizeInBytes = stats.size;
  return fileSizeInBytes;
}

request(`${url}`, (error, response, body) => {
  fs.writeFile(`${filePath}`, body, function (err) {
    if (err) return console.log(err);
  });
  let size = getFilesizeInBytes(`${filePath}`);
  console.log(`Downloaded and saved ${size} bytes to ${filePath}`);
});