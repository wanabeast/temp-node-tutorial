const url = require('url');
const addrs = 'https://nodejs.org/dist/latest-v18.x/docs/api/url.html';

// This splits up the url into readable parts and return an object with each part of a url
const q = url.parse(addrs, true);
console.log(q.protocol);
console.log(q.slashes);
console.log(q.host);
console.log(q.port);
console.log(q.hostname);
console.log(q.path);
console.log(q.pathname);
console.log(q.search);
console.log(q.query);
console.log(q.hash);
console.log(q.href);
