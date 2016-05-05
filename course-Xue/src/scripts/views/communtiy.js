var communtiyTpl=require('../tpl/communtiy.string');

var fnC=require('../until/fn-until.js')
SPA.defineView('communtiy',{
	html:communtiyTpl,
	init:{
		vm:null,
		communSwiper:null,
		ComScroll:null,
		ComScroll2:null,
		ComScroll3:null,
		topUrl:null,
		num:null

	},
	plugins: ['delegated',{
		name:'avalon',
		options:function(vm){
				vm.communlist=[];
				vm.communlist1=[]
				vm.commundata=[];
				// vm.touch=function change(){
				//
				// }
		}
	}],
	bindActions:{
			'tap.slide':function(e,data){
				var $el=$(e.el);
				this.communSwiper.slideTo($el.index());
				$el.addClass('active').siblings().removeClass('active')
			},
			'tap.input':function(e,el){
					this.num++;
					if(this.num%2==1){
							$(e.el).css({'background':'#ccc','font-size':'10px'}).html('取消关注')
							//this.num-=2;
					}else if(this.num%2==0){
						$(e.el).css({'background':'#04dbe6','font-size':'14px'}).html('关注')
					}
					console.log(this.num);

			}
	},
	bindEvents:{
		beforeShow: function(){
			this.num=0;
			var that=this;
			that.topUrl='/course-Xue/mock/topdata.json'
			that.vm=that.getVM();
			that.communSwiper=new Swiper("#communSwiper",{
				loop:false,
				onTransitionStart:function(){
					$('#com_nav li')
					.eq(that.communSwiper.activeIndex)
					.addClass('active').siblings().removeClass('active')
				}
			});
			var height=$('#communSwiper').height();
			$('.swiper-slide').css('height',height)
			that.ComScroll=new IScroll('#slide1',{
			});
			that.ComScroll2=new IScroll('#slide2',{})
			that.ComScroll3=new IScroll('#slide3',{})
			$.ajax({
				url:'/course-Xue/mock/commoun.json',
				success:function(res){
						//that.ComScroll.refresh();
				//	console.log(2);
					that.vm.communlist=res.data;
					that.vm.communlist1=res.data;
					//console.log(that.vm.communlist1)
					 that.vm.commundata=res.data2
					setTimeout(function(){
							//that.ComScroll.refresh();
						that.ComScroll2.refresh();
					 	that.ComScroll3.refresh();
					},600);
				},
				error:function(b){
					console.log(b);
				}
			});

			fnC.preRefresh({
				view:that
			})
		}
	}

});


var myApp=angular.module('myapp',[]);
myApp.controller('comgetData',['$scope','$http',function($scope,$http){
	$scope.data=[];
	$scope.boolean=false;
	$scope.cl=function(){
			console.log($scope.boolean);
	};
	$http('/course-Xue/mock/angular.json').success(function(response){
		console.log(response.data);
		$scope.data=response.data
	})


}])
