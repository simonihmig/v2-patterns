import EmberRouter from '@ember/routing/router';
import config from 'test-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('css');
  this.route('assets');
  this.route('lazy-dynamic-import');
  this.route('lazy-component');
  this.route('webpack');
});
