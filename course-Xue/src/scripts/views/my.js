var myTpl=require('../tpl/my.string');
SPA.defineView('my',{
	html:myTpl,
	plugins: ['delegated',{
		name:'avalon',
		options:function(vm){

		}
	}],
	bindActions:{
		'tap.swicth':function(){


			SPA.open('login',{
				ani:{
					name:'moveEnter',
					position:'right'

				}
			});
			// SPA.getView('login',function(view){
			// 	var root=view.root;
			// 	root.hide()
			// })
		}

	},
	bindEvents:{
		beforeShow: function(){
			console.log(3);
		},
		receiveData :function(data){

				if(data.data.backData==''){
					$('#client').html('我的')
				}else{
					$('#client').html(data.data.backData)
				}

		}
	}

})
