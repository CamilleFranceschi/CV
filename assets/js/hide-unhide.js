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
$(document).ready(function() {
// $.each($(".content"),function(){
//      $(this).hide();
 $('.content').hide();

 });
$('.button').on('click', function() {
	$parent_box = $(this).closest('.box');
	// $sib_box=$(this).closest('.content');
	// $sib_box.siblings().hide();
	// $('.content').not(this).each(function(){
 //         $(this).hide();
 //     });
	// $(".content").not(this).closest('.content').hide();
	$parent_box.find('.content').toggle(1000,'swing');

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