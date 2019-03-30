// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var normalizeHashTags = require('./index.js');

assert.deepEqual(
    normalizeHashTags(['web', 'pravo', 'JavaScript', 'Pravo', 'script', 'programming']),
    'web, pravo, javascript, script, programming',
    'Список "web, pravo, JavaScript, Pravo, script, programming"' +
    ' содержит хэштеги "web, pravo, javascript, script, programming"'
);

assert.deepEqual(
    normalizeHashTags([]), '', 'При пустом массиве получим пустую строку'
);

assert.deepEqual(
    normalizeHashTags(['привет', 'привет', 'привет', 'привет', 'привет']), 'привет', 'При множественном поветорении получим"привет"'
);

console.info('OK!');
