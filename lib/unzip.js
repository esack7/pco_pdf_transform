'use strict';
const pako = require('pako');

module.exports = function(flateDecode) {
  return pako.inflate(new Uint8Array(flateDecode), { to: 'string' });
};
