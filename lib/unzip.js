'use strict';
const pako = require('pako');

module.exports = function(flateDecode) {
  // const buffer = Buffer.from(flateDecode, 'base64');
  // console.log(buffer);
  // console.log(flateDecode);
  // return pako.inflate(flateDecode);
  return pako.inflate(new Uint8Array(flateDecode), { to: 'string' });
};
