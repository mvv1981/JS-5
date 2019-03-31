/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var resultSet = [];
    
    for(var i = 0; i < hashtags.length; i++){
        var hashtag = hashtags[i].toLowerCase();
        
        if (!resultSet.includes(hashtag)) {
            resultSet.push(hashtag);
        }
    }
    return resultSet.join(", ");
};
