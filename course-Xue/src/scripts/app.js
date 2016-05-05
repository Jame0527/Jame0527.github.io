require('./lib/spa.min.js')
require('angular/angular.min.js')


require('./views/index')
require('./views/home')
require('./views/guild')
require('./views/communtiy')
require('./views/my')
require('./views/search')
require('./views/login')
require('./views/regret')




SPA.config({
	indexView: 'guild'
});
if(window.localStorage.getItem('boolean')=='true'){
  SPA.config({
  	indexView: 'index'
  });
}
