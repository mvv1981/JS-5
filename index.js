/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
	var arrLowerCase = [];
	for (var i = 0; i < hashtags.length; i++) {
		var hash = hashtags[i].toLowerCase();
		if (!arrLowerCase.includes(hash)) {
			arrLowerCase.push(hash)
		}
	}
	return arrLowerCase.join(", ");
};
