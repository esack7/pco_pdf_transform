'use strict';
const pako = require('pako');

module.exports = function(flateDecode) {
  // const buffer = Buffer.from(flateDecode, 'base64');
  // console.log(buffer);
  pako.inflate(flateDecode, (err, buffer) => {
    if (err) console.error(err);
    return buffer;
  });
};
