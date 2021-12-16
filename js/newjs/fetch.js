
import "./fetch.json";
$("button").click( function() {
 $.getJSON( "fetch.json", function(obj) { 
  $.each(obj, function(key, value) { 
         $("ul").append("<li>"+value.name+"</li>");
  });
 });
});