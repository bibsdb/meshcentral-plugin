"use strict";

console.log("[Plugin] plugin-ui.js loaded");

plugin = {

    onWebUIStartupEnd: function () {

        console.log("[Plugin] UI startup");

        // Delay because MeshCentral builds UI dynamically
        setTimeout(() => {

            const sidebar = Q('page_leftbar');

            if (!sidebar) {
                console.error("Sidebar not found");
                return;
            }

            console.log("Sidebar found");

            // Avoid duplicates
            if (Q('LeftMenuHelloWorld')) return;

            const btn = document.createElement('div');

            btn.id = 'LeftMenuHelloWorld';
            btn.className = 'lbbutton';
            btn.title = 'Hello World';

            btn.innerHTML = `
                <div class="lbtg bi bi-globe"
                    style="font-size:24px;text-align:center;line-height:40px;">
                </div>
            `;

            btn.onclick = function () {
                alert("PLUGIN WORKS");
            };

            sidebar.appendChild(btn);

            console.log("Button inserted");

        }, 1000);
    }
};