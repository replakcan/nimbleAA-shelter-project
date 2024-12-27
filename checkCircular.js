const madge = require('madge');

madge('/Users/alper/repos/nimbleAA-shelter-project').then((res) => {
  console.log('Circular dependencies:', res.circular());
});