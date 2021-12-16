var output=document.getElementById('app');
var students=["raju","praveen","sigh","giri","pavan","siri"];
var marks=["25","85","95","45","99","78"];
console.log(students.length);
console.log(marks.length);
function myfunn(){
    for(var i=0;i<=students.length;i++){
        var html="<h1>hello good evening</h1>";
        html += '<tr data-row="' + i + '" data-vote="0"><td class="box" >' + students[i] + '</td><td>' + marks[i] + '</td><td>0</td></tr>';
        html += '</table>';
        document.getElementById('app').innerHTML = html;
        var elbox = document.querySelectorAll('#output .box');


    }
   
}