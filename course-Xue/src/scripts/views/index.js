var indexTpl=require('../tpl/index.string');



SPA.defineView('index',{
	html:indexTpl,
	plugins: ['delegated',{
		name:'avalon',
		options:function(vm){

		}
	}],

	modules: [{
		name: 'indexContent',
		container: '.index-body',
		views: ['home','communtiy','search','my'],
		defaultTag: 'home'
	}],
	bindActions:{
		'tap.switch':function(e,data){
			this.modules.indexContent.launch(data.tag)
			$(e.el).addClass('active').siblings().removeClass('active')
		}
	},
	bindEvents:{
		// receiveData:function(data){
		// 		console.log(data);
		// }
	}

})
