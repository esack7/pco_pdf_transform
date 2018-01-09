'use strict';

module.exports = function (stringIdx) {

  /* This section of obj not currently being used, but probably useful for later */
  this.gVal = null;
  this.fLine = null;
  if (stringIdx.split(' g')[1]) {
    const gVal = stringIdx.split(' g')[0];
    this.gVal = gVal.trim();
  }
  const tf = stringIdx.split(' Tf')[0].split('\n');
  if (stringIdx.split(' Tf')[1]) {
    const fLine = tf[tf.length - 1];
    this.fLine = fLine;
  }
  /* End of not useful(for now) section */

  const positionArr = stringIdx.split(' Td')[0].split('\n');
  this.text = stringIdx.split('(')[1].split(')')[0];
  this.positionX = positionArr[positionArr.length - 1].split(' ')[0];
  this.positionY = positionArr[positionArr.length - 1].split(' ')[1];
};