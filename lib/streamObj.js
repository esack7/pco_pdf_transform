'use strict';

module.exports = function (buffer) {
  console.log('in streamObj.js: ', buffer.length);
  this.allBuffer = buffer;
  this.primero = buffer.slice(120, 5120);
  this.segundo = buffer.slice(6165, 21070);
  this.tercero = buffer.slice(21970, 39560);
};