import angular from 'angular';
import template from './demo.html';
import './demo.scss';

class demoController {
    constructor($state) {
        this.$state = $state;
        this.$onInit = () => {
            this.datas = require('./data.json');
            this.show = false;
        };
    }

    // 显示下拉框
    showSelect() {
        this.show = true;
    }

    // 获取下拉框选项
    getValue(target) {
        console.log(target);
        this.selected = target;
        this.show = false;
    }

    // 去下一页
    goNext() {
        this.$state.go('page');
    }
}

export default angular.module('app.demo', [])
    .component('demo', {
        template: template,
        controller: ['$state', demoController]
    }).name;
