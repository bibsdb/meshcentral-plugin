"use strict";

var plugin_plugin = {
    // 1. Setup the view container once when the plugin initializes
    onLoad: function () {
        // Only inject the main view panel if it doesn't already exist
        if (!Q('view-helloworld')) {
            QA('mainView', '<div id="view-helloworld" style="display:none; padding:20px; color:var(--main-text-color, #000);">' +
                           '<h1>Hello World!</h1>' +
                           '<p>Welcome to your custom MeshCentral plugin tab.</p>' +
                           '</div>');
        }
    },

    // 2. FORCE the tab into the DOM every time MeshCentral updates its state
    onStateChange: function (state) {
        // If the side menu exists and our tab is missing, inject it
        if (Q('desktopNav') && !Q('nav-helloworld')) {
            QA('desktopNav', '<li id="nav-helloworld" onclick="plugin_plugin.showTab();"><a href="#"><i class="bi bi-globe"></i>Hello World</a></li>');
        }

        // Keep our tab highlighted if the user is actively viewing it
        if (window.location.hash === '#helloworld') {
            plugin_plugin.showTab();
        }
    },

    // 3. Handles clean tab visibility toggling
    showTab: function () {
        // Hide all native views
        var views = ['devices', 'account', 'users', 'events', 'intelamt', 'plugins', 'plugin'];
        for (var i in views) { 
            if (Q('view-' + views[i])) { Q('view-' + views[i]).style.display = 'none'; } 
        }
        
        // Un-highlight all native side menu tabs
        var navs = ['devices', 'account', 'users', 'events', 'intelamt', 'plugins', 'plugin'];
        for (var i in navs) { 
            if (Q('nav-' + navs[i])) { Q('nav-' + navs[i]).classList.remove('active'); } 
        }

        // Make our Hello World elements active
        if (Q('view-helloworld')) { Q('view-helloworld').style.display = 'block'; }
        if (Q('nav-helloworld')) { Q('nav-helloworld').classList.add('active'); }
        
        window.location.hash = '#helloworld';
    }
};

// Register the frontend plugin handler
MeshServer.registerPlugin('plugin_plugin', plugin_plugin);