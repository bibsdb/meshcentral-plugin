/** * @description MeshCentral Test Plugin
* @author Your Name
* @license Apache-2.0
* @version v0.0.0
*/

"use strict";

// 1. THIS RUNS IMMEDIATELY WHEN THE SERVER STARTS AND DETECTS THE PLUGIN
console.log("=================================================");
console.log("[MeshCentral SERVER] plugin.js has been successfully executed by Node.js!");
console.log("=================================================");

module.exports.plugin = function (parent) {
    var obj = {};
    obj.parent = parent;
    obj.exports = ["onDesktopDisconnect"];

    obj.onDesktopDisconnect = function() {  
        writeDeviceEvent(encodeURIComponent(currentNode._id));  
        Q('d2devEvent').value = Date().toLocaleString()+': '; 
        focusTextBox('d2devEvent');
    };
    
    return obj;
};