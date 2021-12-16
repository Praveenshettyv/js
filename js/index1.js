//console.log("hello");
var output=document.getElementById('output');
var n=prompt("enter number of elemnts u enterd in array");
var arr=[];
for(var z=0;z<=n-1;z++){
    arr[z]=prompt("enter array data");
    arr.push(z);
//var arr=["hello","java",45,85,"react","talent",85,"hello","react"];
}
var removedubliacte=Removedub(arr);
output.innerHTML=arr+"<br>"+removedubliacte;
function Removedub(a){
    var barray=[];
    var bobject={};
    var m="";
    for(var i=a.length-1;i>=0;i--)
    { 
        console.log(a[i]);
        bobject[a[i]]="hello";
        

    }
    //console.log(bobject);
    for(m in bobject){
        barray.push(m);
    }
    return barray;
}


