routing.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider', '$compileProvider'];
export default function routing($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, $compileProvider) {

    $urlRouterProvider.otherwise('demo');

    $stateProvider
        // demo
        .state('demo', {
            url: '/demo',
            template: '<demo></demo>',
            title: 'demo'
        })
        // page
        .state('page', {
            url: '/page',
            template: '<page></page>',
            title: 'page'
        })
        ;

    //配置图片白名单(其中 weixin 是微信安卓版的 localId 的形式, wxlocalresource 是 IOS 版本的 localId 形式)
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*((https?|weixin|wxlocalresource):|data:image\/)/);

}