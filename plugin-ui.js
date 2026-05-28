"use strict";

console.log("[PLUGIN] CLIENT JS LOADED");

plugin = {

    onWebUIStartupEnd: function () {

        console.log("[PLUGIN] UI READY");

        setTimeout(() => {

            const sidebar = document.getElementById('page_leftbar');

            if (!sidebar) {
                console.error("[PLUGIN] Sidebar missing");
                return;
            }

            console.log("[PLUGIN] Sidebar found");

            if (document.getElementById('HelloPluginBtn')) return;

            const btn = document.createElement('div');

            btn.id = 'HelloPluginBtn';
            btn.className = 'lbbutton';
            btn.innerHTML = '<div class="lbtg">P</div>';

            btn.onclick = () => {
                alert("PLUGIN BUTTON WORKS");
            };

            sidebar.appendChild(btn);

            console.log("[PLUGIN] Button inserted");

        }, 1000);
    }
};