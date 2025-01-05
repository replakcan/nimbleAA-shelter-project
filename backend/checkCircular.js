const madge = require("madge");

madge(`${__dirname}`).then((res) => {
  console.log("Circular dependencies:", res.circular());
});
