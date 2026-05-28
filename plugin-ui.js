"use strict";

console.log("[PLUGIN] client loaded");

plugin = {

    onWebUIStartupEnd: function () {

        console.log("[PLUGIN] UI ready");

        setTimeout(() => {

            const bar = document.getElementById("page_leftbar");
            if (!bar) return;

            if (document.getElementById("mybtn")) return;

            const btn = document.createElement("div");
            btn.id = "mybtn";
            btn.className = "lbbutton";
            btn.innerHTML = "PLUGIN";
            btn.onclick = () => alert("works");

            bar.appendChild(btn);

            console.log("[PLUGIN] button added");

        }, 1000);
    }
};