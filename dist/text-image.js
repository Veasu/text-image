!function(){function t(t){t=String(t),i.innerText=t,i.setAttribute("style",this._style),document.body.append(i);var e=t.split("\n"),o=Math.floor(this.style.stroke/2),n=i.offsetHeight/e.length,h=.2*n;switch(s.width=i.offsetWidth+o,s.height=i.offsetHeight,l.clearRect(0,0,s.width,s.height),l.fillStyle=this.style.background,l.beginPath(),l.fillRect(0,0,s.width,s.height),l.fill(),l.font=this.style.size+"pt "+this.style.font,l.textAlign=this.style.align,l.lineWidth=o,l.strokeStyle=this.style.strokeColor,l.fillStyle=this.style.color,l.textAlign){case"center":o=s.width/2;break;case"right":o=s.width-o}e.forEach(function(t,e){this.style.stroke&&l.strokeText(t,o,n*(e+1)-h),l.fillText(t,o,n*(e+1)-h)}.bind(this)),document.body.removeChild(i)}var e,i=document.createElement("pre"),s=document.createElement("canvas"),l=s.getContext("2d"),o={font:"Sans-serif",align:"left",color:"#000000",size:16,background:"rgba(0, 0, 0, 0)",stroke:0,strokeColor:"#FFFFFF"};window.TextImage=function(t){return this instanceof TextImage?(this.setStyle(t),this):new TextImage(t)},(e=window.TextImage.prototype).setStyle=function(t){this.style={};for(var e in o)t&&t[e]?this.style[e]=t[e]:this.style[e]=o[e];return this._style="font: "+this.style.size+"pt "+this.style.font+";",this._style+="line-height: 1;",this._style+="text-align: "+this.style.align+";",this._style+="color: "+this.style.color+";",this._style+="background-color: "+this.style.background+";",this._style+=";padding: 0; display: block; position: fixed; top: 100%;overflow: hidden",this},e.toDataURL=function(e){return e&&t.call(this,e),s.toDataURL()},e.toImage=function(e,i){t.call(this,e);var l=new Image;return i&&(l.onload=i),l.src=s.toDataURL(),l}}();