'use strict';

const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'), {
  suffix: 'Prom'
});
const StreamObj = require('./streamObj');
const unzip = require('./unzip');
const handleArr = require('./handleArr');

module.exports = () => {
  return new Promise((resolve, reject) => {
    fs
      .readFileProm(`${__dirname}/../files/Lord I Need You - Capo 4-G.pdf`)
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
      .then(charArr => handleArr(charArr))
      .catch(err => reject(console.error(err)));
  });
};
