import angular from 'angular';
import template from './page.html';
import './page.scss';

class pageController {
    constructor() {
        this.$onInit = () => {
            
        };
    }
}

export default angular.module('app.page', [])
    .component('page', {
        template: template,
        controller: [pageController]
    })
    .name;