
$(function(){
	//滚动事件：当滚动的距离是x大于500小于2000的时候
	//500的时候 给intro_fixed加fixtop_right
	//并且dicContent这个顶部的bar要显示
	$(window).scroll(function(){
		var gd = $(window).scrollTop();
		if(gd>500 && gd<2200){
			$(".fixtopBar").css('display','block');
			$(".intro_fixed").addClass('fixtop_right');
		}else{
			$(".fixtopBar").css('display','none');
			$(".intro_fixed").removeClass('fixtop_right');
		}
	})
	
	
	//列表页点击更多 会加载出来图片信息
	//1.点击加载更多的时候，ajax加载数据	
	
	$('.climore').click(function(){		
		loadPic();
	})
	function loadPic(){
		
		$.get("php/data.json",function(data){
			str = "";
			data.forEach(function(value,key){
				str += '<li>'
					str += '<div class="imgbox">'
						str += '<a class="img_wrapper" href="">'
							str += '<img src="'+value.titimg+'" alt="" />'
							
							str += '<span class="tj_title">'+value.title+'</span>'
							str += '<span class="tj_position"><i></i>'+value.posit+'</span>'
						str += '</a>'
					str += '</div>'
					str += '<div class="contentbox">'
						str += '<p class="tj_price">均价：<i>'+value.price+'</i><span class="zzicon"></span></p>'
						str += '<p class="tj_acreage">'+value.aream+'</p>'
					str += '</div>'
				str += '</li>'	
			})
			$(".premisesList").append(str);
		});
		
	}
})



































