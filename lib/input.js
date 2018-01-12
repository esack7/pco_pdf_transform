'use strict';

const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'), {
  suffix: 'Prom'
});
const StreamObj = require('./streamObj');
const unzip = require('./unzip');
const handleArr = require('./handleArr');

module.exports = function() {
  return new Promise((resolve, reject) => {
    fs
      .readFileProm(`${__dirname}/../files/The Earth Is Yours - G.pdf`)
      .then(songBuff => new StreamObj(songBuff))
      .then(stream => unzip(stream.primero))
      .then(unzipped => {
        return unzipped.split('ET').map(idx => {
          return idx.split('BT')[1];
        });
      })
      .then(charArr => console.log(handleArr(charArr)))
      .catch(err => reject(console.error(err)));
  });
};
