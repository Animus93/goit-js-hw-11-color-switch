!function(){var t=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],n={bodyRef:document.querySelector(".js-body"),startButtonRef:document.querySelector(".js-startBtn"),stopButtonRef:document.querySelector(".js-stopBtn"),inputRef:document.querySelector(".js-input")},e={ID:null,onStartSwitchColor:function(){return this.ID&&(clearInterval(this.ID),this.ID=null),currentID=setInterval((function(){console.log("switch");var e=t[o(0,t.length-1)];n.bodyRef.style.backgroundColor=e}),1e3*Number(n.inputRef.value)||1e3),this.ID=currentID},onStopSwitchColor:function(){clearInterval(this.ID),this.ID=null}},o=function(t,n){return Math.floor(Math.random()*(n-t+1)+t)};n.inputRef.addEventListener("input",(function(){n.inputRef.nextElementSibling.innerHTML="Введено секунд: ".concat(n.inputRef.value," нажмите Start для начала")})),n.startButtonRef.addEventListener("click",e.onStartSwitchColor.bind(e)),n.stopButtonRef.addEventListener("click",e.onStopSwitchColor.bind(e))}();
//# sourceMappingURL=index.0196194f.js.map
