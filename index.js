/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var result = [];
    for (var i = 0; i < hashtags.length; i++) {
        var str = hashtags[i].toLowerCase();

        if (!result.includes(str)) {
            result.push(str);
        }
        
    }
    return result.join(", ");
    
};
