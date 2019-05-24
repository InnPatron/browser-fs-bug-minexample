var BrowserFS = require("browserfs");

BrowserFS.install(window);
BrowserFS.configure({
  fs: "LocalStorage"
}, function(e) {
  // let fs = require("fs");
  let fs = BrowserFS.BFSRequire("fs");
  let files = fs.readdirSync("./");
  
  if (e) {
    throw e;
  }
});
