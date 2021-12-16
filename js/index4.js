/** 
//console.log()
var out=document.getElementById('app');
for(var a in window){
     document.write(a+" : "+window[a]+`<br>`);
     
}
//window.open('index4.html');
*/
//window.alert("welcome to programming skills")
var out=document.getElementById('app');

function myfun(){
     window.history.go(-1);
}
function popupon(){
     MyPopup();
    var t= window.setTimeout(popupon,100);
}
function MyPopup(){
     alert("hello");
}
function popupoff(){
     window.clearInterval(t);
}
out.innerHTML+=navigator.userAgent;
function gourl(){
     var url=document.getElementById('url').value;
     window.location=url;
}