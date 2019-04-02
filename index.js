/**
 * Барабаш Максим Сергеевич
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var obj = {};
    var property;
    for (var i = 0; i < hashtags.length; i++) {
        if (hashtags[i].length !== 0) {
            property = hashtags[i].toLowerCase();
            obj[property] = true;
        }
    }
    return (Object.keys(obj)).join(', ');
};
