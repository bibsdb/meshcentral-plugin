/** * @description MeshCentral Test Plugin
* @author Your Name
* @license Apache-2.0
* @version v0.0.0
*/

"use strict";

console.log("[PLUGIN] server loaded");

module.exports.plugin = function (parent) {

    var obj = {};

    obj.onWebUIStartupEnd = function () {
        console.log("[PLUGIN] UI hook fired (server side)");
    };

    return obj;
};