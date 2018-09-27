window.i = 0;
window.onload = function(){
	$(function(){
		$('.button').click(function(){
			$('.button~.menu').toggle(1000);
		});
		$('.buttonBlue').click(function(){
			$('.buttonBlue~.menu').toggle(1000);
		});
		$('.buttonRed').click(function(){
			$('.buttonRed~.menu').toggle(1000);
		});
		$('.buttonPurple').click(function(){
			$('.buttonPurple~.menu').toggle(1000);
		});

		$('.buttonSelectDefault').click(function(){
			$('.buttonSelectDefault~.selectMenu').toggle(1000);
		});
		$('.buttonSelectBlue').click(function(){
			$('.buttonSelectBlue~.selectMenu').toggle(1000);
		});
		$('.buttonSelectRed').click(function(){
			$('.buttonSelectRed~.selectMenu').toggle(1000);
		});
		$('.buttonSelectPurple').click(function(){
			$('.buttonSelectPurple~.selectMenu').toggle(1000);
		});

		$('.buttondropdownDefault').click(function(){
			$('.buttondropdownDefault~.menu').toggle(1000);
		});
		$('.buttondropdownBlue').click(function(){
			$('.buttondropdownBlue~.menu').toggle(1000);
		});
		$('.buttondropdownRed').click(function(){
			$('.buttondropdownRed~.menu').toggle(1000);
		});
		$('.buttondropdownPurple').click(function(){
			$('.buttondropdownPurple~.menu').toggle(1000);
		});
		$('.myModalPrimary').click(function(){
			$('.window').show(300);
		});
		$('.poppin-dismiss').click(function(){
			$('.window').hide(300);
		});
		$('.window').click(function(){
			$('.window').hide(300);
		});
		$(document).keyup(function(e) {
			if (e.keyCode == 27) {
				$('.window').hide(300);
			}
		});
		$('.myModalDefault').click(function(){
			$('.window').show(300);
		});
		$('.poppin-dismiss').click(function(){
			$('.window').hide(300);
		});
		$('.window').click(function(){
			$('.window').hide(300);
		});
		$(document).keyup(function(e) {
			if (e.keyCode == 27) {
				$('.window').hide(300);
			}
		});

		$('.tab-list').css('display', 'block');
		$('.tab-list').click(function(event) {
			var actuel = event.target;
			if (!/li/i.test(actuel.nodeName) || actuel.className.indexOf('actif') > -1) {
				return;
			}
			$(actuel).addClass('actif').siblings().removeClass('actif');
			setDisplay();
		});
		function setDisplay() {
			var displayMode;
			$('.tab-list li').each(function(event) {
				displayMode = $(this).hasClass('actif') ? '' : 'none';
				$('.tab-content').eq(event).css('display', displayMode);
			});
		}
		setDisplay();

		$('.close-primary').click(function(){
			$('.alert-primary').hide(300);
		});
		$('.close-success').click(function(){
			$('.alert-success').hide(300);
		});
		$('.close-info').click(function(){
			$('.alert-info').hide(300);
		});
		$('.close-warning').click(function(){
			$('.alert-warning').hide(300);
		});
		$('.close-error').click(function(){
			$('.alert-error').hide(300);
		});
		$('.close-magic').click(function(){
			$('.alert-magic').hide(300);
		});

		$('.tooltipTop').mouseover(function(){
			if($(this).attr("title") == "")
				return false;
			$('body').append('<span class="infobulle"></span>');
			var bubulle = $('.infobulle');
			bubulle.append($(this).attr("title"));
			$(this).attr("title","");

			if($(this).attr("data-placement")){
				var posTop = $(this).offset().top-$(this).height();
				var posLeft = $(this).offset().left+$(this).width()/100+bubulle.width()/100;
				bubulle.css({left:posLeft, top:posTop+2, opacity: 0});
				bubulle.animate({top:posTop+2, opacity: 1},500);
			}
			if($(this).attr("data-content")){
				var bubulle = $('.infobulle');
				bubulle.append($(this).attr("data-content"));
				$(this).attr("data-content","");
			}
		});	
		$('.tooltipTop').mouseout(function(){
			var bubulle = $('.infobulle');
			$(this).attr("title", bubulle.text());
			bubulle.remove();
		});
		$('.tooltipBottom').mouseover(function(){
			if($(this).attr("title") == "")
				return false;
			$('body').append('<span class="infobulle"></span>');
			var bubulle = $('.infobulle');
			bubulle.append($(this).attr("title"));
			$(this).attr("title","");

			if($(this).attr("data-placement")){
				var posTop = $(this).offset().top-$(this).height();
				var posLeft = $(this).offset().left+$(this).width()/100+bubulle.width()/100;
				bubulle.css({left:posLeft, top:posTop+105, opacity: 0});
				bubulle.animate({top:posTop+105, opacity: 1},500);
			}
			if($(this).attr("data-content")){
				var bubulle = $('.infobulle');
				bubulle.append($(this).attr("data-content"));
				$(this).attr("data-content","");
			}
		});	
		$('.tooltipBottom').mouseout(function(){
			var bubulle = $('.infobulle');
			$(this).attr("title", bubulle.text());
			bubulle.remove();
		});
		$('.tooltipLeft').mouseover(function(){
			if($(this).attr("title") == "")
				return false;
			$('body').append('<span class="infobulle"></span>');
			var bubulle = $('.infobulle');
			bubulle.append($(this).attr("title"));
			$(this).attr("title","");

			if($(this).attr("data-placement")){
				var posTop = $(this).offset().top-$(this).height();
				var posLeft = $(this).offset().left+$(this).width()/100+bubulle.width()/100;
				bubulle.css({left:posLeft-260, top:posTop+40, opacity: 0});
				bubulle.animate({top:posTop+40, opacity: 1},500);
			}
			if($(this).attr("data-content")){
				var bubulle = $('.infobulle');
				bubulle.append($(this).attr("data-content"));
				$(this).attr("data-content","");
			}
		});	
		$('.tooltipLeft').mouseout(function(){
			var bubulle = $('.infobulle');
			$(this).attr("title", bubulle.text());
			bubulle.remove();
		});
		$('.tooltipRight').mouseover(function(){
			if($(this).attr("title") == "")
				return false;
			$('body').append('<span class="infobulle"></span>');
			var bubulle = $('.infobulle');
			bubulle.append($(this).attr("title"));
			$(this).attr("title","");

			if($(this).attr("data-placement")){
				var posTop = $(this).offset().top-$(this).height();
				var posLeft = $(this).offset().left+$(this).width()/100+bubulle.width()/100;
				bubulle.css({left:posLeft+100, top:posTop+40, opacity: 0});
				bubulle.animate({top:posTop+40, opacity: 1},500);
			}
			if($(this).attr("data-content")){
				var bubulle = $('.infobulle');
				bubulle.append($(this).attr("data-content"));
				$(this).attr("data-content","");
			}
		});	
		$('.tooltipRight').mouseout(function(){
			var bubulle = $('.infobulle');
			$(this).attr("title", bubulle.text());
			bubulle.remove();
		});

		var carrousel ={
			nbSlide: 0,
			nbCurrent: 1,
			elemCurrent: null,
			elem: null,

			init : function(elem){
				this.nbSlide = elem.find(".slide").length;

				elem.append('<div class="pagination"></div>');
				for(var i=1; i <= this.nbSlide; i++){
					elem.find(".pagination").append("<span>"+i+"</span>");
				}

				elem.find(".pagination span").click(function(){
					carrousel.goSlide($(this).text());
				});

				this.elem = elem;
				elem.find(".slide").hide();
				elem.find(".slide:first").show();
				this.elemCurrent = elem.find(".slide:first");
				this.elem.find(".pagination span:first").addClass("active");
			},

			goSlide : function(number){
				if(number == this.nbCurrent){
					return false;
				}
				var sens = 1;
				if(number < this.nbCurrent){
					sens = -1;
				}
				var cssDebut = {"left": sens*this.elem.width()};
				var cssFin = {"left":  -sens*this.elem.width()};
				this.elem.find("#slide"+number).show().css(cssDebut);
				this.elem.find("#slide"+number).animate({"top": 0, "left": 0}, 700);
				this.elemCurrent.animate(cssFin, 700);
				this.elem.find(".pagination span").removeClass("active");
				this.elem.find(".pagination span:eq("+(number -1)+")").addClass("active");
				this.nbCurrent = number;
				this.elemCurrent = this.elem.find("#slide"+number);
			},

			next : function(){
				var number = this.nbCurrent+1;
				if(number > this.nbSlide){
					number = 1;
				}
				this.goSlide(number);
			},

			prev : function(){
				var number = this.nbCurrent-1;
				if(number < 1){
					number = this.nbSlide;
				}
				this.goSlide(number);
			}
		}


		carrousel.init($(".carrousel"), 1000);

		$(".left").click(function(){
			carrousel.next();   
		});
		$(".right").click(function(){
			carrousel.prev();   
		});
	});
}