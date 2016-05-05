var regretTpl=require('../tpl/regret.string');


SPA.defineView('regret',{
	html:regretTpl,
	plugins: ['delegated',{
		name:'avalon',
		options:function(vm){

		}
	}],
	bindActions:{
		'tap.login':function(){
			this.hide()
			// SPA.show('login',{
			// 	ani:{
			// 		name:'moveEnter',
			// 		position:'left'
			// 	}
			// })
		}
	},
	bindEvents:{
		beforeShow: function(){

		}
	}

})
