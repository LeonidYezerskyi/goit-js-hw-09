!function(){var e,t=document.querySelector("body"),a=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");function n(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16));t.style.backgroundColor=e}d.disabled=!0,a.addEventListener("click",(function(t){n(),e=setInterval(n,1e3),a.disabled=!0,d.disabled=!1})),d.addEventListener("click",(function(){clearInterval(e),a.disabled=!1,d.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.f997fcbf.js.map
