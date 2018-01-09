'use strict';
const TextObj = require('./textObj');

module.exports = function(textArr) {
  textArr.pop();
  let songText = '';
  let prevY = 0;
  textArr.map(idx => {
    idx = idx.split('\n\n')[0];
    let textObj = new TextObj(idx);
    if (textObj.text === '.') {
      textObj.text = ' ';
    }
    if (prevY !== parseInt(textObj.positionY)) {
      textObj.text = '\n' + textObj.text;
    }
    prevY = parseInt(textObj.positionY);
    return (songText += textObj.text);
  });
  return songText;
};
