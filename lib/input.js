'use strict';
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'), { suffix: 'Prom' });

module.exports = () => {
  return new Promise((resolve, reject) => {
    fs
      .readFileProm(`${__dirname}/../files/Beautiful - G.pdf`)
      .then(song => {
        let streamArrays = song
          .toString('utf8')
          .split('endstream')
          .map(idx => {
            let stream = idx.split('stream').slice(1);
            return stream[0];
          });
        return streamArrays;
      })
      .then(arr => arr.pop())
      .then(arrStreams => console.log(arrStreams))
      .catch(err => reject(console.error(err)));
  });
};
