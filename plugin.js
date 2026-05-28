/** * @description MeshCentral Test Plugin
* @author Your Name
* @license Apache-2.0
* @version v0.0.0
*/

"use strict";

module.exports.plugin = function (parent) {
    var obj = {};
    obj.parent = parent;
    
    // EXPLICIT FIX: MeshCentral requires frontend files to be exported 
    // inside this array for the server to serve them to web clients.
    obj.exports = [
      "onDesktopDisconnect",
      "plugin-ui.js" 
    ];
    
    obj.onDesktopDisconnect = function() {  
        writeDeviceEvent(encodeURIComponent(currentNode._id));  
        Q('d2devEvent').value = Date().toLocaleString()+': '; 
        focusTextBox('d2devEvent');
    };
    
    return obj;
};