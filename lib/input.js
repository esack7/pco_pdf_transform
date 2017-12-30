'use strict';

const zlib = require('zlib');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'), {
  suffix: 'Prom'
});
const StreamObj = require('./streamObj');

module.exports = () => {
  return new Promise((resolve, reject) => {
    fs
      .readFileProm(`${__dirname}/../files/Beautiful - G.pdf`)
      .then(songBuff => {
        return new StreamObj(songBuff);
      })
      .then(stream => console.log(stream.tercero.toString('utf8')))
      .catch(err => reject(console.error(err)));
  });
};