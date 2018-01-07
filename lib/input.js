'use strict';

const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'), {
  suffix: 'Prom'
});
const StreamObj = require('./streamObj');
const unzip = require('./unzip');

module.exports = () => {
  return new Promise((resolve, reject) => {
    fs
      .readFileProm(`${__dirname}/../files/Beautiful - G.pdf`)
      .then(songBuff => {
        return new StreamObj(songBuff);
      })
      .then(stream => stream.primero)
      .then(stream => unzip(stream))
      .then(unzipped => {
        return unzipped.split('ET').map(idx => {
          return idx.split('BT')[1];
        });
      })
      .then(charArr => console.log(charArr))
      .catch(err => reject(console.error(err)));
  });
};
