/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    if (hashtags.length > 0) {
        var listTag = {}; // объект для коллекции
        for (var i = 0; i < hashtags.length; i++) {
            var key = hashtags[i].toLowerCase(); // для каждого элемента создаём свойство, имена свойств не могут повторятся, поэтому дубли будут перезаписывать существующее свойство
            listTag[key] = true; // запомнить строку в виде свойства объекта, значение здесь не важно
          }
        var keys = Object.keys(listTag);
        var tagsString = keys.join(", ");
        return tagsString;               
    }
    else {
        return stringEmpty = '';
    }
};
