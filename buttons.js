$(function(){

	$(".toggle").mousedown(function(){
		hide();
	});
	$(".toggle").mouseup(function(){
		$(this).show();
	});
});