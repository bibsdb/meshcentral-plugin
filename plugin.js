"use strict";

console.log("[PLUGIN] SERVER FILE LOADED");

module.exports.plugin = function (parent) {

    var obj = {};

    obj.server_startup = function () {
        console.log("[PLUGIN] server_startup()");
    };

    obj.onWebUIStartupEnd = function (files) {

        console.log("[PLUGIN] Injecting browser JS");

        files.push({
            filename: "plugin-ui.js",
            path: __dirname + "/plugin-ui.js"
        });
    };

    return obj;
};