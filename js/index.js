/**
function login() {
    console.log("username is ", );

}
 
fetch("index.json")
.then(Response => Response.json())
.then(json =>{
    console.log(json); 
    document.getElementById('app').innerHTML=''+json.users[0].name+'';
})


fetch("index.json")
  .then(function (response) {
    return response;
  })
  .then(function (index) {
    return index.json();
  })
  .then(function () {
    const html = index.json(
      (users) => `<div class="card"> 
        <h4> ${users.name}</h4>
        <h3> ${users.gender}</h3>
        <h3> ${users.aboutAuthor}</h3>
    </div>`
    );
    document.getElementById("app").innerHTML = html;
  })
  .catch(function (err) {
    console.log("Fetch problem show: " + err.message);
  });

var output=document.getElementById('app');
      
function myFunNew(para = "Hello World"){
  var a=para.length;
  output.innerHTML += para+`${a}`;
   return para;
}
myFunNew();

//anonymous function
var output=document.getElementById('app');
 var a=function(b){
 output.innerHTML="this function is anonymous fnction "+b;
//normal function
function myfun(a,b){
  return a+b
}
//self invoking function
(function(){
  var a="hello";
  output.innerHTML=a;
})
*/
var output=document.getElementById('app');
var skills=["java","js","angular","react"];
function myfun()
  {
    rand(skills);
     output.innerHTML+=skills+"<br>";

  }
  function rand()
  {
    for(var b=skills.length-1;b>=0;b--)
     var a=Math.floor(Math.random()*skills.length+1);
     
     var temp =skills[b];
     skills[b]=skills[a];
     skills[a]=temp;
  }


