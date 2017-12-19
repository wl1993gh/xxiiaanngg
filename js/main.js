function Fun(){
	var con = '<video controls="controls" width="100%">'
				+'<source src="video/video.mp4" type="video/mp4" />'
			    +'<source src="video/video.webm" type="video/webm" />'
			+'</video>';
	$('.video-box').append(con);
	$('.watch').on('click',function(){
		$('.wx-mask').show();
		$('.video-box').show();
		if($('.video-box video').length==0){
			$('.video-box').append(con);
		}
		
	});
	$('.close,.close img').on('click',function(){
		$('.video-box video').remove();
		$('.wx-mask').hide();
		$('.video-box').hide();
	});
	$('.wechat').hover(function(){
		$('.sao').show();
		$('.wechat img').attr('src','img/wechat1.png');
	},function(){
		$('.sao').hide();
		$('.wechat img').attr('src','img/wechat.png');
	});
	$('.qq').hover(function(){
		$('.qq img').attr('src','img/qq1.png');
	},function(){
		$('.qq img').attr('src','img/qq.png');
	});
	$('.weibo').hover(function(){
		$('.weibo img').attr('src','img/weibo1.png');
	},function(){
		$('.weibo img').attr('src','img/weibo.png');
	});
	$('#zhi').hover(function(){
		$('.content1').show();
		$('.pc-content').hide();
		$('#you').css('backgroundColor','#d1d1d1');
	},function(){
		$('.pc-content').show();
		$('.content1').hide();
		$('#you').css('backgroundColor','#f2963a');
	});
	setInterval(change,1000);
	var j = 0;
	var len1 = $('.pc .news-items').length;
	function change(){
		if(j<len1){
			$('.pc .news-items').eq(j).addClass('news-active');
			$('.pc .news-items').eq(j).siblings().removeClass('news-active');
			$('.pc .news-items').eq(j).children().children('.news-tit').addClass('news-active');
			$('.pc .news-items').eq(j).siblings('.news-items').children().children('.news-tit').removeClass('news-active');
			var ss = '.point'+ j;
			$(ss).addClass('point-active');
			$(ss).siblings().removeClass('point-active');
			j++;
			if(j>4){
				var aa = (4-j)*170+'px';
				var bb = (4-j)*140+'px';
				$('.pc .news-items').first().animate({'marginTop':aa},100);
				$('.point0').animate({'marginTop':bb},100);
			}else{
				$('.pc .news-items').first().animate({'marginTop':'0'},100);
				$('.point0').animate({'marginTop':'30px'},100);
			}
		}else if(j==len1){
			j=0;
		}
	}
	$('.download').hover(function(){
		$('.logo-img').attr('src','img/download.png');
	},function(){
		$('.logo-img').attr('src','img/app-logo.png');
	});
	
	var i = 0;
	var len = $('.news-line .ball-box').length;
	setInterval(judge,2000);
	function judge(){
		if(i<len){
			$('.news-line .ball-box').eq(i).addClass('active');
			$('.news-line .ball-box').eq(i).siblings().removeClass('active');
			$('.news-con .news-items').eq(i).css({'display':'flex','display':'-webkit-box','display':'-moz-box','display':'-ms-flexbox','display':'-webkit-flex'});
			$('.news-con .news-items').eq(i).siblings().hide();
			i++;
			if(i>4){
				var aa = (4-i)*1.4-0.2+'rem';
				$('.news-line .ball-box').first().animate({'marginLeft':aa},100);
			}else{
				$('.news-line .ball-box').first().animate({'marginLeft':'0.2rem'},100);
			}
		}else if(i==len){
			i=0;
		}
	}
	
	/*移动端菜单的显示隐藏*/
	$('.nemu-img').on('touchend',function(){
		var dis = $('.menu-item').css('display');
		if(dis=='none'){
			$(this).css({"transform":"rotate(90deg)",
			"-webkit-transform":"rotate(90deg)",
			"-moz-transform":"rotate(90deg)",
			"-ms-transform":"rotate(90deg)",
			"-o-transform":"rotate(90deg)",
			"transition-duration":"1s"});
			$('.menu-item').show(500);
			dis=false;
		}else{
			$(this).css({"transform":"rotate(0deg)",
			"-webkit-transform":"rotate(0deg)",
			"-moz-transform":"rotate(0deg)",
			"-ms-transform":"rotate(0deg)",
			"-o-transform":"rotate(0deg)",
			"-ms-animation-duration":"1s",
			"-moz-animation-duration":"1s",
			"-webkit-animation-duration":"1s",
			"transition-duration":"1s"});
			$('.menu-item').hide(500);
			dis=true;
		}
		
	});
		var startx, starty;
		/*判断触屏滑动方向*/
		var startx, starty;
	    //获得角度
	    function getAngle(angx, angy) {
	        return Math.atan2(angy, angx) * 180 / Math.PI;
	    };
	 
	    //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
	    function getDirection(startx, starty, endx, endy) {
	        var angx = endx - startx;
	        var angy = endy - starty;
	        var result = 0;
	 
	        //如果滑动距离太短
	        if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
	            return result;
	        }
	 
	        var angle = getAngle(angx, angy);
	        if (angle >= -135 && angle <= -45) {
	            result = 1;
	        } else if (angle > 45 && angle < 135) {
	            result = 2;
	        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
	            result = 3;
	        } else if (angle >= -45 && angle <= 45) {
	            result = 4;
	        }
	 
	        return result;
	    }
	    //手指接触屏幕
	    document.addEventListener("touchstart", function(e) {
	        startx = e.touches[0].pageX;
	        starty = e.touches[0].pageY;
	    }, false);
	    //手指离开屏幕
	    document.addEventListener("touchend", function(e) {
	        var endx, endy;
	        endx = e.changedTouches[0].pageX;
	        endy = e.changedTouches[0].pageY;
	        var cla = $('body').attr('class');
			var num = cla.charAt(cla.length-1);
			var aa = -$(window).height();
	        var direction = getDirection(startx, starty, endx, endy);
	        switch (direction) {
	            case 1:
	                
					if(num<6){
						/*var val = (num-1)*aa;
						var value = 'translate3d(0px, '+val+'px, 0px)';
						$('#dowebok').css('transform',value);*/
						$('.menu-item li').eq(num-1).addClass('active_');
						$('.menu-item li').eq(num-1).siblings().removeClass('active_');
						num++;
					}
	                break;
	            case 2:
					if(num>0){
						/*var val = (num-1)*aa;
						var value = 'translate3d(0px, '+val+'px, 0px)';
						$('#dowebok').css('transform',value);*/
						$('.menu-item li').eq(num-1).addClass('active_');
						$('.menu-item li').eq(num-1).siblings().removeClass('active_');
						num--;
					}
	                break;
	            default:
	        }
	    }, false);
	    
}
