var a=JSON.parse(data);
console.log(a);
var output=document.getElementById("app");
//window.onload=bulidlist;
function fun(){
    var g=document.getElementById("namee").value;
    var num=document.getElementById("number").value;
    message('?', g + ' +' +num, a.length);
    a.push({
        name :g,
        guest : num,
       status: false
    })
    g="";
    num=0;


}
function bulidlist(){
    JSON.parse(data);
    
    for(var n=0;n<=a.length;a++){
        var p=a[n].g+a[n].num;
        if(a[n].status){
            message('✔', person, x, 'active');
        }else{
            message('✘', person, x, '');
        }
    }

}

function message(m, person, id) {
    output.innerHTML += '<div class="toggle" data-id="' + id + '" data-person="' + person + '" >' + m + ' ' + person + ' </div>';

}