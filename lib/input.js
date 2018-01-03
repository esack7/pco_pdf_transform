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
      .then(stream => {
        console.log(stream.primero);
        stream = stream.primero.toString('base64');
        return stream;
      })
      .then(stream => unzip(stream))
      .then(unzipped => console.log(unzipped))
      // .then(stream => {
      //   fs.writeFile('./files/test.pdf', stream.primero, err => {
      //     if (err) throw err;

      //     console.log('The file was succesfully saved!');
      //   });
      // })
      .catch(err => reject(console.error(err)));
  });
};
