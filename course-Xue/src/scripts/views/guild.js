var guildTpl=require('../tpl/guild.string');
require('../lib/swiper-3.3.1.min.js');
SPA.defineView('guild',{
	html:guildTpl,
	plugins: ['delegated',{
		name:'avalon',
		options:function(vm){

		}
	}],
	bindActions:{
		'goto.index':function(){
			SPA.open('index');
			window.localStorage.setItem('boolean','true');
		}
	},
	bindEvents:{
		beforeShow: function(){
			var mySwiper = new Swiper('#guide-swiper', {
				loop: false
			});
		}
	}

})
