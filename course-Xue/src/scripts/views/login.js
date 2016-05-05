var loginTpl=require('../tpl/login.string');
SPA.defineView('login',{
	html:loginTpl,
	init:{
		num:null,
		vm:null,
		value:null,
		backData:null
	},
	plugins: ['delegated',{
		name:'avalon',
		options:function(vm){
			vm.keyword=""
			vm.get=function(){
				// this.value=vm.
			}
		}
	}],
	bindActions:{
    'tap.hide':function(){
			//this.hide();
			this.vm=this.getVM();
			this.backData=this.vm.keyword;
			SPA.router.backTo('index',{
				ani:{
					name:'actionSheet'
				},
				backData:this.backData
			})
    	// SPA.show('index',{
			// 	ani:{
			// 		name:'actionSheet'
			// 	}
			// })
			// SPA.getView('index',function(viwe){
			// 	var root=view.root;
			// 	this.hide()
			// })


    },
    'tap.regret':function(){
      SPA.open('regret',{},function(){

			})

    },
		'tap.change':function(e,data){
			this.num++;
			if(this.num%2==1){
				$(e.el).attr('src','/course-Xue/img/pic/login3.png');
				$('#pas').attr('type','text')
			}else {
					$(e.el).attr('src','/course-Xue/img/pic/login2.png');
					$('#pas').attr('type','password')
			}

		}
	},
	bindEvents:{
		beforeShow: function(){
			var that=this;
			that.num=0;
		},
	'show':function(){
		// $('#txt').on('keyup',function(){
		// 	console.log($('#txt').value());
		// })
		// console.log(this.vm.keyword);
	}
	}

})
