'use strict';
const TextObj = require('./textObj');

module.exports = function (textArr) {
  textArr.pop();
  let songText = '';
  textArr.map(idx => {
    idx = idx.split('\n\n')[0];
    // console.log(idx);
    let textObj = new TextObj(idx);
    console.log('text: ', textObj.text);
    console.log('positionX: ', textObj.positionX);
    console.log('positionY: ', textObj.positionY);
    return textObj;
  });
  return songText;
};