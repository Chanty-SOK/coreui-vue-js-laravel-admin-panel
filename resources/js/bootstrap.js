window._ = require('lodash');

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');
} catch (e) {}
window.axios = require('axios');
window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    'X-Requested-With': 'XMLHttpRequest'
};