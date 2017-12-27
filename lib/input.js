'use strict';
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'), { suffix: 'Prom' });

module.exports = () => {
  return new Promise((resolve, reject) => {
    fs
      .readFileProm(`${__dirname}/../files/Beautiful - G.pdf`)
      .then(song => console.log(song.readInt16LE()))
      .catch(err => reject(console.error(err)));
  });
};
