!function(){var t,e=document.querySelector("body"),n=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");function o(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));e.style.backgroundColor=t}a.disabled=!0,n.addEventListener("click",(function(e){o(),t=setInterval(o,1e3),n.disabled=!0,a.disabled=!1})),a.addEventListener("click",(function(){clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.938b7b00.js.map