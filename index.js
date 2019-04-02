/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
            
           var obj = {};

           for (var i = 0; i < hashtags.length; i++) {
           var str = hashtags[i].toLowerCase();
           obj[str] = true; // запомнить строку в виде свойства объекта
  }
    
    var arrTags = Object.keys(obj);
    var stringTags = arrTags.join(',');
    
    return stringTags;

};
