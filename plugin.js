/** * @description MeshCentral Test Plugin
* @author Your Name
* @license Apache-2.0
* @version v0.0.0
*/

"use strict";

// Changed from module.exports.sample to module.exports.plugin
module.exports.plugin = function (parent) {
    var obj = {};
    obj.parent = parent; // keep a reference to the parent
    obj.exports = [
      "onDesktopDisconnect" // export this function to the web UI
    ];
    
    obj.onDesktopDisconnect = function() {  
        writeDeviceEvent(encodeURIComponent(currentNode._id));  
        Q('d2devEvent').value = Date().toLocaleString()+': '; 
        focusTextBox('d2devEvent');
    }
    
    return obj;
}