"use strict";

var plugin_plugin = {
    // This handles view state changes across the entire MeshCentral UI
    onViews: function (view, state) {
        // 'view-plugin_plugin' is the ID of the view area container 
        // that MeshCentral automatically opens when your plugin is clicked in the list.
        if (view == 'plugin_plugin') {
            
            // 1. Create a clean container inside the view so we don't duplicate content
            if (!Q('plugin-helloworld-container')) {
                var html = '<div id="plugin-helloworld-container" style="padding: 20px; color: var(--main-text-color, #000);">';
                html += '  <h1 style="margin-bottom: 10px;">Hello World!</h1>';
                html += '  <p style="font-size: 1.1em; opacity: 0.8;">Welcome to your custom MeshCentral dashboard page.</p>';
                html += '  <hr style="border-color: rgba(255,255,255,0.1); margin: 20px 0;">';
                html += '  <p>Since the sidebar injection was getting blocked, you successfully reused the native plugin screen!</p>';
                html += '</div>';
                
                // Overwrite the plugin's default landing panel with your layout
                Q('view-plugin_plugin').innerHTML = html;
            }
        }
    }
};

// Register the frontend handler
MeshServer.registerPlugin('plugin_plugin', plugin_plugin);