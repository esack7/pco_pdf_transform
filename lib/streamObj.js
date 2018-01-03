'use strict';

module.exports = function(buffer) {
  this.allBuffer = buffer;
  this.header = buffer.slice(0, 8);
  this.primero = Buffer.concat(
    [this.header, buffer.slice(120, 5120)],
    this.header.length + buffer.slice(120, 5120).length
  );
  this.segundo = buffer.slice(6165, 21070);
  this.tercero = buffer.slice(21970, 39560);
  this.cuarto = buffer.slice(40396, 49105);
};