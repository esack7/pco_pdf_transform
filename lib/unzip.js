'use strict';
const zlib = require('zlib');

module.exports = function (flateDecode) {
  const buffer = Buffer.from(flateDecode, 'base64');
  console.log(buffer);
  zlib.inflate(buffer, (err, buffer) => {
    if (err) console.error(err);
    return buffer;
  });
};