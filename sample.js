/** 
* @description MeshCentral Sample Plugin
* @author Ryan Blenis
* @copyright 
* @license Apache-2.0
* @version v0.0.1
*/

var helloworld = {
    // This is a native MeshCentral hook triggered whenever a device screen loads
    onDeviceRefresh: function(node) {
        // Prevent duplicate tabs from being created if the page refreshes
        if (document.getElementById('tabHelloWorld')) return; 

        // 1. Create the new tab element
        var myTab = document.createElement('div');
        myTab.id = 'tabHelloWorld';
        myTab.className = 'tab'; // Uses MeshCentral's native styling
        myTab.innerHTML = 'Hello World';
        
        // 2. Define what happens when clicked
        myTab.onclick = function() { 
            // Mark our tab as active visually
            var tabs = document.getElementById('deviceTabs').children;
            for (var i = 0; i < tabs.length; i++) { tabs[i].classList.remove('tabsel'); }
            myTab.classList.add('tabsel');

            // Inject our custom panel into the main view
            helloworld.showPanel(node); 
        };
        
        // 3. Append our tab to the native tab bar
        document.getElementById('deviceTabs').appendChild(myTab);
    },

    // Render the custom content area
    showPanel: function(node) {
        var view = document.getElementById('deviceView');
        view.innerHTML = ''; // Clear out the default view (like Desktop or Terminal)

        // Create a wrapper container
        var content = document.createElement('div');
        content.style.padding = '20px';
        content.className = 'w-full';
        
        content.innerHTML = `
            <h1 style="font-size: 24px; font-weight: bold; color: #333; margin-bottom: 10px;">
                Hello World!
            </h1>
            <p style="color: #666;">
                You are currently managing the node: <strong style="color: #000;">${node.name}</strong>
            </p>
            <div style="margin-top: 20px; padding: 15px; bg-color: #f0f0f0; border-radius: 5px; border: 1px solid #ccc;">
                This is a completely custom sandboxed view running inside your plugin framework.
            </div>
        `;
        view.appendChild(content);
    }
};