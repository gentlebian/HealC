/**
 * Create by kirika 2016.3.28 for healc
 * common js
 **/

$(function(){
    //searchbox
    $(".searchbox input").keydown(function(e){ 
		var curKey = e.which; 
		if(curKey == 13){ 
			$("#search").click(); 
			return false; 
		} 
	});
	$("#search").bind('click',function(){

	}); 

	//radio-group
	$(".radio-group .radio").bind('click',function(){
		if($(this).hasClass('selected'))
			return;
		$(this).addClass('selected').siblings().removeClass('selected');
	});

	//numberbox
	$(".numbox .plus").bind('click',function(){
		var old=parseInt($(this).siblings('.num').val());
		$(this).siblings('.num').val((old>0)?old+1:1);
	});
	$(".numbox .minus").bind('click',function(){
		var old=parseInt($(this).siblings('.num').val());
		$(this).siblings('.num').val((old>2)?old-1:1);
	});

	//checkbox
	$("#selectall").bind('click',function(){
		if($(this).is(":checked")){
			$(".select").prop('checked', true);
		}
		else{
			$(".select").prop('checked', false);
		}
	});
});