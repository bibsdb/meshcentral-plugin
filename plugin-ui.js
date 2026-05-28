"use strict";

// Immediately log that the file was loaded by the browser
console.log("[MeshCentral Plugin] plugin-ui.js has been loaded by the browser.");

var plugin_plugin = {
    // This executes exactly when the page finishes loading after a login or refresh
    onWebUIStartupEnd: function () {
        console.log("[MeshCentral Plugin] onWebUIStartupEnd triggered.");
        
        // Check if page_leftbar exists in the DOM
        if (Q('page_leftbar')) {
            console.log("[MeshCentral Plugin] Found '#page_leftbar' in the DOM.");
            
            if (!Q('LeftMenuHelloWorld')) {
                var btnHtml = '<div id="LeftMenuHelloWorld" tabindex="0" class="lbbutton" title="Hello World" ' +
                              'onmouseup="plugin_plugin.showTab();" onkeypress="if (event.key==\'Enter\') { plugin_plugin.showTab(); }">' +
                              '  <div class="lbtg bi bi-globe" style="font-size: 24px; text-align: center; line-height: 40px;"></div>' +
                              '</div>';
                
                QA('page_leftbar', btnHtml);
                console.log("[MeshCentral Plugin] Custom tab HTML successfully injected into #page_leftbar.");
            } else {
                console.log("[MeshCentral Plugin] Custom tab already exists, skipping injection.");
            }
        } else {
            console.warn("[MeshCentral Plugin] CRITICAL: '#page_leftbar' was NOT found in the DOM during startup.");
        }

        // Check if mainView exists in the DOM
        if (Q('mainView')) {
            console.log("[MeshCentral Plugin] Found '#mainView' in the DOM.");
            
            if (!Q('view-helloworld')) {
                QA('mainView', '<div id="view-helloworld" style="display:none; padding:30px; color:var(--main-text-color, #000);">' +
                               '  <h1 style="margin-bottom: 10px;">Hello World!</h1>' +
                               '  <p style="font-size: 1.1em; opacity: 0.8;">Your custom plugin tab is officially operational.</p>' +
                               '</div>');
                console.log("[MeshCentral Plugin] Custom content view HTML successfully injected into #mainView.");
            }
        } else {
            console.warn("[MeshCentral Plugin] CRITICAL: '#mainView' was NOT found in the DOM during startup.");
        }
    },

    // Handle toggling views when your new custom button is clicked
    showTab: function () {
        console.log("[MeshCentral Plugin] showTab() function invoked by user click.");

        // Trigger MeshCentral's internal navigation system to hide native views
        if (typeof go === 'function') { 
            console.log("[MeshCentral Plugin] Calling native go(99) to clear standard views.");
            go(99); 
        } else {
            console.error("[MeshCentral Plugin] ERROR: Native 'go' navigation function is missing!");
        }

        // Remove the visual 'active' indicator class from all other core menu buttons
        var buttons = document.querySelectorAll('#page_leftbar .lbbutton');
        console.log("[MeshCentral Plugin] Cleaning active classes from " + buttons.length + " menu buttons.");
        buttons.forEach(function(btn) { btn.classList.remove('lbbuttonsel'); });

        // Highlight your custom button and make your Hello World container visible
        if (Q('LeftMenuHelloWorld')) { 
            Q('LeftMenuHelloWorld').classList.add('lbbuttonsel'); 
            console.log("[MeshCentral Plugin] Highlighted custom tab button.");
        }
        
        if (Q('view-helloworld')) { 
            Q('view-helloworld').style.display = 'block'; 
            console.log("[MeshCentral Plugin] Switched custom view container to display: block.");
        } else {
            console.error("[MeshCentral Plugin] ERROR: '#view-helloworld' container does not exist in DOM.");
        }
        
        window.location.hash = '#helloworld';
    }
};

// Register the interface script with the engine
try {
    MeshServer.registerPlugin('plugin_plugin', plugin_plugin);
    console.log("[MeshCentral Plugin] Successfully registered 'plugin_plugin' with MeshServer.");
} catch(e) {
    console.error("[MeshCentral Plugin] Failed to register plugin with MeshServer:", e);
}