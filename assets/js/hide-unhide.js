// $("#hide").click(function() {
// 	$("p").hide();
// });

// $("#show").click(function() {
// 	$("p").show();
// });
// $(document).ready(function (){
// 	$("#content").hide();
// 	$("#hideshow").live("click", function(event){
// 		$("#content").toggle("show");
// 	});
// })


// $(document).ready(function() {
//     $('#content').toggle(
//         function() {
//             $('#content').slideDown("fast");
//         },
//         function() {
//             $('#content').slideUp("fast");
//         }
//     );
// });

$(document).ready(function() {
$("#content").hide();
$("#hideshow").click(function(){
    $("#content").toggle(1000);
});
});