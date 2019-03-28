/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
  return hashtags.map(el => el.toLowerCase())
    .reduce((acc, curr) => {
      let newArr = acc.concat(!acc.includes(curr) ? [curr] : []);
      return newArr;
    }, []).join(', ');
};
