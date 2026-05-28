console.log("!!!!!!!! plugin-ui.js LOADED !!!!!!!!");

(function () {

    function waitForUI() {

        const sidebar = document.getElementById("page_leftbar");

        if (!sidebar) {
            setTimeout(waitForUI, 500);
            return;
        }

        if (document.getElementById("plugin-btn")) return;

        const btn = document.createElement("div");
        btn.id = "plugin-btn";
        btn.className = "lbbutton";
        btn.title = "Plugin";

        btn.innerHTML = '<div style="font-size:20px;text-align:center;">P</div>';

        btn.onclick = function () {
            alert("Plugin works");
        };

        sidebar.appendChild(btn);

        console.log("[PLUGIN] sidebar button inserted");
    }

    waitForUI();

})();