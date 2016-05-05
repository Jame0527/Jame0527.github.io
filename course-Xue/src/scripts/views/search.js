var searchTpl=require('../tpl/search.string');
SPA.defineView('search',{
	html:searchTpl,
	plugins: ['delegated',{
		name:'avalon',
		options:function(vm){

		}
	}],
	bindActions:{

	},
	bindEvents:{
		beforeShow: function(){

		}
	}

})
