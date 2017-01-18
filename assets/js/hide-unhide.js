// $("#hide").click(function() {
// 	$("p").hide();
// });

// $("#show").click(function() {
// 	$("p").show();
// });
$("#content").hide();
$(document).ready(function(){
	$("#hideshow").live("slow","click", function(event){
		$("#content").toggle("show");
	});
})