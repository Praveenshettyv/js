var out=document.getElementById('cal');
function add(){
    onta(num1.value,num2.value,"+",function(a,b){
        return a+b;
    })
}

function sub(){
    onta(num1.value,num2.value,"-",function(a,b){
         return a-b;
     })
}
        function mal(){
            onta(num1.value,num2.value,"*",function(a,b){
                return a*b;
            })
        }
            function div(){
                onta(num1.value,num2.value,"/",function(a,b){
                    return a/b;
                })
            }
            
function onta(a,b,s,cback){
    var results=cback(Number(a),Number(b));
    out.innerHTML+=a+""+s+""+b+"="+results +`<br>`;
}
            

