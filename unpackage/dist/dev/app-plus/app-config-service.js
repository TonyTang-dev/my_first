
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/timeTable/timeTable","pages/scores/scores","pages/settings/settings","pages/home/home"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"音符课程表","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","selectedColor":"#ff5500","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/home/home","iconPath":"static/home.png","selectedIconPath":"static/home1.png","text":"首页"},{"pagePath":"pages/timeTable/timeTable","iconPath":"static/schedule.png","selectedIconPath":"static/schedule1.png","text":"课表"},{"pagePath":"pages/settings/settings","iconPath":"static/settings.png","selectedIconPath":"static/settings1.png","text":"设置"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"音符课程表","compilerVersion":"3.2.3","entryPagePath":"pages/timeTable/timeTable","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/timeTable/timeTable","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"课程表","enablePullDownRefresh":true}},{"path":"/pages/scores/scores","meta":{},"window":{"navigationBarTitleText":"首页","enablePullDownRefresh":false}},{"path":"/pages/settings/settings","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"设置","enablePullDownRefresh":false}},{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
