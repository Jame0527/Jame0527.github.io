var _fnUntil={
	dataFormat: function(arr){
		    var newArr = [];
		    for (var i = 0; i < Math.ceil(arr.length/2); i++) {
		      newArr[i] = [];
		      newArr[i].push(arr[i*2]);
		      newArr[i].push(arr[i*2+1]);
		    }
		    return newArr;
		},

	preRefresh:function(prt){
		var that=this;
		var prtObj=prt.handler||'#liveScroll';
		var prtHeight=prt.height||30;
		var prtImgarrow=prt.arrow||'/course-Xue/img/arrow.png';
		var prtImgloader=prt.loader||'/course-Xue/img/ajax-loader.gif'
  	var vm=prt.view.vm;
		var obj=prt.view.obj;
		var height=prt.view.height;
		var ComScroll=prt.view.ComScroll;
		var topUrl=prt.view.topUrl;
		var	ComScroll2=prt.view.ComScroll2;
		var	ComScroll3=prt.view.ComScroll3;
		 ComScroll.scrollBy(0,-prtHeight)
		 refresh(ComScroll2,topUrl)
		 refresh(ComScroll,topUrl)




function refresh(obj,url){
		obj.scrollBy(0, -prtHeight);

		var head = $(prtObj).find('.head img'),
		topImgHasClass = head.hasClass('up');
		var foot = $(prtObj).find('.foot img'),
		bottomImgHasClass = head.hasClass('down');
		obj.on('scroll', function () {
			var y = this.y,
			maxY = this.maxScrollY - y;
			if (y >= 0) {

				!topImgHasClass && head.addClass('up');
				return '';
			}
			if (maxY >= 0) {
				!bottomImgHasClass && foot.addClass('down');
				return '';
			}
			// if(y>height){
			//
			// 		obj.css('position','absoluted');
			// }else{
			// 			obj.css('position','');
			// }
		});

		obj.on('scrollEnd', function () {
			if (this.y >= -prtHeight && this.y <0) {
				obj.scrollTo(0, -prtHeight);
				head.removeClass('up');

			} else if (this.y >= 0) {
				head.attr('src', prtImgloader);
            //TODO ajax下拉刷新数据
             $.ajax({
            	url:url,
            	success:function(res){
										obj.refresh();
                    var Rearr=res.data2;
                    vm.communlist=Rearr.concat(vm.communlist);

								setTimeout(function () {
										obj.refresh();
										obj.scrollTo(0, -prtHeight);
										head.removeClass('up');
										head.attr('src', prtImgarrow);
								}, 0);

            	}
            });


        }

        var maxY = this.maxScrollY - this.y;
        if (maxY > -prtHeight && maxY < 0) {
        	var self = this;
        	obj.scrollTo(0, self.maxScrollY + prtHeight);
        	foot.removeClass('down')
        } else if (maxY >= 0) {
        	foot.attr('src', prtImgloader);
            //TODO ajax上拉加载数据
            var self = this;
									obj.refresh()
                 $.ajax({
                url:topUrl,
                success:function(res){

                    vm.communlist.pushArray(res.data);
										setTimeout(function(){
					            	obj.refresh();
					             obj.scrollTo(0, self.y + prtHeight);
					             foot.removeClass('down');
					             foot.attr('src', prtImgarrow);

					          },0);
                }
            });

        }
    })
		}
	}


}
module.exports=_fnUntil
