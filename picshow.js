//jQuery学习应用
//$(selector).action()
$(document).ready(function(){
	$(".c1").mouseover(function(){//鼠标位于元素上方
		$(this).css({
			"opacity": "1"	//鼠标移动上方后元素透明度改变
		});
		$("#i2").append("<img src='"+$(this).attr("src")+"'id='pic'>");
		$("#pic").css({
			"width":"600px",
			"border-radius": "10px",
		});
		$(".c1").mouseout(function(){
			$(".c1").css({
				"opacity": "0.3"
			});
			$("#pic").remove();
		});
	});
});
$(document).ready(function(){
  $("#button1").click(function(){
     $("#here1").fadeToggle("slow");
  });
});
$(document).ready(function(){
  $("#button2").click(function(){
     $("#here2").toggle();
  });
  
  $("#button3").click(function(){
     $("#here3").slideToggle();
  });
});