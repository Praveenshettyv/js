/**var a=["raghu","ramu","raju","praveen"];
html="welcome to java script";

var b=document.getElementById("app").innerHTML=`Hello`
function onloadBlid(){
     for(var i=0;i<=a.length-1;i++){
         html+=a[i];
     }

}*/
/**
function popup(){
    var url="index8.html";
    window.open(url,"_blank","width=100,top=200");
}
 var a="https://www.udemy.com/course/javascript-training/learn/lecture/8031352#overview";
 var e=encodeURIComponent(a);
 console.log(e);
 var d=decodeURIComponent(e);
 console.log(d);

 var h="hyderabad";
 var app=document.getElementById('app');

 function popup(){
  var m=document.getElementById('mystring').value;
  var c=app.innerText;
  c=c.replace(h,m);
  h=m;
  console.log(h);
console.log(m);
  app.innerText=c;
 }

var a=["raju","raghu","italent"];
window.onload=aword;
var randword;
 function aword(){
      var r=a[Math.floor(Math.random()*a.length)]
      randword=r;
      var s="";
      for(var i=0;i<=r.length;i++){
        var j=Math.floor(Math.random()*r.length);
        s+=r[j];
    
      }
      console.log(s);
      
 }
  */
 var  d=new Date();
 var output=document.getElementById('app');
 output.innerHTML=`<br>`+d;




