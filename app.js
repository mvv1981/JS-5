var normalizeHashTags = require('./index.js');
console.info(normalizeHashTags(['web', 'pravo', 'JavaScript', 'Pravo', 'script', 'programming']));
// "web, pravo, javascript, script, programming"