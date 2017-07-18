import angular from 'angular';

// 页面功能组件
import selectComponent from './@selectComponent/selectComponent';

// 页面路由组件
import demo from '../components-router/demo/demo';
import page from '../components-router/page/page';

// 注入模块
export default angular.module('app.components', [
    // 功能
    selectComponent,
    // 路由
    demo, page
])
.name;