!function(){var t,e=document.querySelector("body"),n=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]");function r(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));e.style.backgroundColor=t}n.addEventListener("click",(function(e){r(),t=setInterval(r,1e3),n.disabled=!0})),o.addEventListener("click",(function(){clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.ba71cf36.js.map