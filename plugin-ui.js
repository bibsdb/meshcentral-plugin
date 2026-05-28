"use strict";

var plugin_plugin = {
    // This executes automatically on the user's browser right after login
    onLoad: function () {
        // 1. Injects your custom tab into the side navigation bar
        QA('desktopNav', '<li id="nav-helloworld" onclick="plugin_plugin.showTab();"><a href="#"><i class="bi bi-globe"></i>Hello World</a></li>');

        // 2. Injects your hidden view container into MeshCentral's main view area
        QA('mainView', '<div id="view-helloworld" style="display:none; padding:20px; color:var(--main-text-color);">' +
                       '<h1>Hello World!</h1>' +
                       '<p>Welcome to your custom MeshCentral plugin tab.</p>' +
                       '</div>');
    },

    // Handles layout state toggles when clicking your custom tab
    showTab: function () {
        // Hide standard view blocks
        var views = ['devices', 'account', 'users', 'events', 'intelamt', 'plugins', 'plugin'];
        for (var i in views) { 
            if (Q('view-' + views[i])) { Q('view-' + views[i]).style.display = 'none'; } 
        }
        
        // Clear active styles from all navigation links
        var navs = ['devices', 'account', 'users', 'events', 'intelamt', 'plugins', 'plugin'];
        for (var i in navs) { 
            if (Q('nav-' + navs[i])) { Q('nav-' + navs[i]).classList.remove('active'); } 
        }

        // Make your view visible and set your tab as active
        if (Q('view-helloworld')) { Q('view-helloworld').style.display = 'block'; }
        if (Q('nav-helloworld')) { Q('nav-helloworld').classList.add('active'); }
        
        // Push your UI view state cleanly to the browser URL hash
        window.location.hash = '#helloworld';
    }
};

// Register this frontend handler cleanly under the shortname mapping object
MeshServer.registerPlugin('plugin_plugin', plugin_plugin);