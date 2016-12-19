import angular from 'angular';
import AppComponent from './app.component';
import NavComponent from './navComponent/nav.component';
// import uiRouter from 'angular-ui-router';
import 'normalize.css';

angular
    .module('app', [
        // uiRouter
    ])
    .config(($locationProvider) => {
        "ngInject";

        // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
        // #how-to-configure-your-server-to-work-with-html5mode
        $locationProvider.html5Mode(true).hashPrefix('!');
    })
    .component('app', AppComponent)
    .component('nav', NavComponent);
