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

// $(document).ready(function() {
// $("#content").hide();
// $("#hideshow").click(function(){
//     $("#content").toggle(1000);
// });
// });

// $(document).ready(function() {
// $("#" + this.content).hide();
// $("#hideshow").click(function(){
//     $("#" + this.content).toggle("slow");
// });
// });
// find('#content').hide();
// $('.button').on('click', function() {
// 	$parent_box = $(this).closest('.box');
// 	$parent_box.siblings().find('#content').hide();
// 	$parent_box.find('#content').toggle();
// });

$.each($(".content"),function(){
     $(this).hide();
});

// $(document).ready(function() {
// $('.content').hide();
// $('.button').on('click', function() {
// 	$parent_box = $(this).closest('.box');
// 	$parent_box.siblings().find('.content').hide();
// 	$parent_box.find('.content').toggle(1000, 'swing');
// });
// });

// $(".buttons").click(function () {
//   $("#" + this.value).toggle("slow");
// });