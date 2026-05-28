"use strict";

console.log("[PLUGIN] browser script loaded");

plugin = {

    onWebUIStartupEnd: function () {

        console.log("[PLUGIN] UI ready");

        // wait for MeshCentral UI to fully render
        setTimeout(function () {

            const sidebar = document.getElementById("page_leftbar");
            if (!sidebar) {
                console.error("[PLUGIN] sidebar not found");
                return;
            }

            // prevent duplicates
            if (document.getElementById("plugin-btn")) return;

            const btn = document.createElement("div");
            btn.id = "plugin-btn";
            btn.className = "lbbutton";
            btn.title = "Plugin";

            btn.innerHTML =
                '<div class="lbtg bi bi-globe" ' +
                'style="font-size:24px;text-align:center;line-height:40px;"></div>';

            btn.onclick = function () {
                alert("Plugin button clicked!");
            };

            sidebar.appendChild(btn);

            console.log("[PLUGIN] sidebar button added");

        }, 1000);
    }
};