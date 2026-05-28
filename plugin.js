/** * @description MeshCentral Test Plugin
* @author Your Name
* @license Apache-2.0
* @version v0.0.0
*/

"use strict";

module.exports.plugin = function (parent) {
    var obj = {};
    obj.parent = parent;
    
    // Clean this up! ONLY list actual backend functions here.
    obj.exports = ["onDesktopDisconnect"];
    
    obj.onDesktopDisconnect = function() {  
        writeDeviceEvent(encodeURIComponent(currentNode._id));  
        Q('d2devEvent').value = Date().toLocaleString()+': '; 
        focusTextBox('d2devEvent');
    };

    // THIS IS THE CORRECT METHOD:
    // This server hook intercepts the Web UI compilation and injects your script tag natively
    obj.onWebUIStartupEnd = function(arr) {
        // Tells MeshCentral to append your script to the main web header stream
        arr.push('meshcentral-plugins/plugin/plugin-ui.js');
    };
    
    return obj;
};