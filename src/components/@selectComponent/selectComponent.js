import angular from 'angular';
import template from './selectComponent.html';
import './selectComponent.scss';

class selectComponentController {
    constructor() {
        this.$onInit = () => {
            alert(1);
        };
    }
}

export default angular.module('app.selectComponent', [])
    .component('selectConponent', {
        template: template,
        controller: [selectComponentController]
    })
    .name;