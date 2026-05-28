/** * @description MeshCentral Test Plugin
* @author Your Name
* @license Apache-2.0
* @version v0.0.0
*/

"use strict";

console.log("[PLUGIN] loaded");

module.exports.plugin = function (parent) {

    var obj = {};

    obj.exports = ["onWebUIStartupEnd"];

    obj.onWebUIStartupEnd = function (files) {
        console.log("[PLUGIN] injecting UI script");
        files.push("plugin-ui.js");
    };

    return obj;
};