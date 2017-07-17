import angular from 'angular';
import template from './demo.html';
import './demo.scss';

class demoController {
    constructor() {
        this.$onInit = () => {

        };
    }
}

export default angular.module('app.demo', [])
    .component('demo', {
        template: template,
        controller: [demoController]
    }).name;
