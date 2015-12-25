import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import HomeController from './controllers/home.controller';

angular
  .module('app', ['ui.router'])
  .constant('SC', '534a1bbf605da9e4343e6705bef2bf70')
  .config(config)
  .controller('HomeController', HomeController)
;