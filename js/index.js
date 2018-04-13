
/*
登录关闭
*/
    
$(function(){
	//注册关闭
	$('.login_register .register').click(function(){
		$('.phoneBox_register').show();
	});
	$('.closeLogin').click(function(){
		$('.phoneBox_register').hide();
	})
	//登录关闭
	$('.login_register .login').click(function(){
		$('.phoneBox_login').show();
	});
	$('.closeLogin').click(function(){
		$('.phoneBox_login').hide();
	})
	//开始找房input切换
	var data = ["试试输入地铁线/站在地铁附近找房,如 13号线",
	"请输入楼盘名称开始找房",
	"输入地铁线或地铁站可以找地铁附近的房源",
	"请输入小区名开始查找小区",
	"房产知识有疑问？来搜搜吧~"]
	$(".searchMenu li").click(function(){
		$(this).removeClass('active');
		var index = $(this).index();
		$(".detailbox .search_text").attr("placeholder",data[index]);
//		var triwidth = $(".searchMenu li").width()/2;
		$('.search .triangle').animate({'left':20+68*index},400);
//		$(this).addClass('active');
	})
	
	 $(".backTop").hide();
	//回到顶部
	$(window).scroll(function() {
      /* 判断滚动条 距离页面顶部的距离 100可以自定义*/
    	if($(window).scrollTop() > 600) {
			$(".backTop").fadeIn(100); /* 这里用.show()也可以 只是效果太丑 */
	        } else {
	        $(".backTop").fadeOut(100);
	    }
	});
	$(".backTop").on("click", function() {
   		$('body,html').animate({
    		scrollTop: 0
    	}, 1000);
    	return false;
    });
//底部js start
    var index = 0;
	// var index;
	
	$('.linktab li').mouseover(function(){

		$('.linktab li').eq(index).removeClass('linkhover');
		$('.linklist_tab').eq(index).removeClass('active');

		index = $(this).index();

		$('.linktab li').eq(index).fadeIn().addClass('linkhover');
		$('.linklist_tab').eq(index).addClass('active');

	})
    
})
//底部js end

//列表页	
//treval切换
$(function(){
	$(".recoList_tit a").click(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		$(".recoList ul").addClass('active');
		$(".recoList ul").siblings().removeClass('active');
	})
})

//注册验证 start
	//当失去焦点的时候
    //是十三位的数字
    //密码需含数字、字母
    //密码不能少于8位
var userBool = false; 
var yzmBool = false; 
var passBool = false; 
var repassBool = false; 
$(".regis_username").blur(function(){	
	var revalue = $(this).val().trim();
	//当输入的长度为0时
	if(revalue.length==0){
		$(this).siblings('p').children("span").html('请输入手机号码').parent('.regis_u').show();	
		return;
	}
	//当输入是11位数字时
	var reg1 =/^[0-9]{11}$/;
	if(!reg1.test(revalue)){
		$(this).siblings('p').children("span").html('请输入正确的手机号').parent('.regis_u').show();
		return;
	}
	//当输入是11位数字手机号码是验证
	var reg2 =/^(13[0-9]|14[57]|15[012356789]|17[35678]|18[0-9]|199)[0-9]{8}$/;
	if(!reg2.test(revalue)){
		$(this).siblings('p').children("span").html('请输入正确的手机号').parent('.regis_u').show();
		return;
	}
	userBool = true;
	//发送ajax
//	var that = $(this);
	$.post('php/reg.php',{regis_username:revalue},function(msg){
		if(msg.success ==1){
			$(".regisList li .regis_username").siblings('p').children('span').html('手机号码已注册').parent('.regis_u').show();
		}else{
			$(".regisList li .regis_username").siblings('p').children('span').html('手机号码可用').parent('.regis_u').show();
		}
	},'json');
});
//当所有的input失去焦点的时候  让所有的提示标签隐藏
$(".regisitem input").focus(function(){
	$(this).siblings('p').hide();
})
//验证码验证
$(".regis_useryzm").blur(function(){
	var yzmvalue = $(this).val().trim();	

	if(yzmvalue==0){
		$(this).siblings('p').children("span").html('请输入验证码').parent('.regis_u').show();
		return;
	}
	var reg = /[0-9]{6}/;
	if(!reg.test(yzmvalue)){
		$(this).siblings('p').children('span').html('请输入正确的验证码').parent('.regis_u').show();
		return;
	}
	if(reg.test(yzmvalue)){
//		$(this).siblings('p').hide();
	}
	yzmBool = true;
})
//密码验证
$(".regis_mm").blur(function(){
	var value = $(this).val().trim();
	 
	
	 //至少一个以字母开头，任意字符6-18位的
	 if(value.length==0){
	 	$(this).siblings('p').children("span").html('请输入密码').parent('.regis_u').show();
		return;
	 }
	 var reg = /^[a-zA-Z]+/;
	 if(!reg.test(value)){
		$(this).siblings('p').children("span").html('请输入正确的密码').parent('.regis_u').show();
		return;
	 }
	  var reg1 = /^\w{6,18}$/;
	 if(!reg1.test(value)){
	 	$(this).siblings('p').children("span").html('请输入正确的密码').parent('.regis_u').show();
		return;
	 }
	 passBool = true; 
	
})
//判断两次密码是否一致
$(".regis_remm").blur(function(){
	var pass1 = $('.regis_mm').val().trim();
	var pass2 = $('.regis_remm').val().trim();
	if(pass1 == pass2){
		repassBool = true; 
	}else{
		return;
	}
})

$(".li_zhuce").click(function(){
	if(repassBool&&userBool&&yzmBool&&passBool){
		console.log("注册成功~~~")
	}else{
		return;
	}
})




//注册验证 end
