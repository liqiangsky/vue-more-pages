/* eslint-disable no-undef */
define(["require", "exports"], function (require, exports) {
  "use strict";
  exports.fun = function () {
    return require("./a.js").fun();
  };
});
