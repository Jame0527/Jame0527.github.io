var homeTpl=require('../tpl/home.string');
var fn=require('../until/fn-until.js');
SPA.defineView('home',{
	html:homeTpl,
	init:{
		vm:null,
		myScroll:null,
		boj:null,
		height:null
	},
	plugins: ['delegated',{
		name:'avalon',
		options:function(vm){
			vm.homelist=[]
		}
	}],
	bindActions:{

	},
	bindEvents:{
		beforeShow:function(){
			var that=this;
			that.vm=this.getVM();
			//that.myScroll = new IScroll('#homeScroll');

			setTimeout(function () {
					that.myScroll = that.widgets.homeScroll;
					$.ajax({
						url:'/course-Xue/mock/mockhome.json',
						success:function(res){
							that.vm.homelist=res.data;
							setTimeout(function(){
								avalon.scan(that.root,that.view)
								that.myScroll.refresh();
								that.myScroll.on('scrollStart',function(){
									var y = this.y,
									maxY = this.maxScrollY - y;

									//console.log(maxY);
								})

							},0)
						}
				}, 0);

				var top = $('.body-reader').offset().top - 44;
				that.myScroll.on('scroll', function () {
					if(this.y <= -top) {
						if($('body > .body-reader').length == 0){
							$('.body-reader').clone(true).appendTo('body');
						}
					} else {
						$('body > .body-reader').remove();
					}
				});
			});


			var mySwiper=new Swiper("#home-swiper",{
				loop:true,
				 pagination: '.swiper-pagination',
				 autoplay:1000,
				 autoplayDisableOnInteraction:false
			});
			// that.height=213;
			// that.obj=$('#reader');
			//  fn.preRefresh({
			//  	view:that
			//  })
		},
		show:function(){

	}
}
})
