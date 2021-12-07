// eslint-disable-next-line no-undef
define("bModule", ["require", "exports"], function (require, exports) {
  "use strict";
  exports.fun = function () {
    return require("./a.js").fun();
  };
});
