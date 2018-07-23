import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('dashboard', { path: '/dashboard' }, function() {
    this.route('admin');
  });
  this.route('login', { path: '/login' });
  this.route('dashboard', { path: '/' }, function() {
    this.route('patient');
    this.route('doctor');
  });
  this.route('signup', { path: '/signup' });

  this.route('admin-dashboard');
});

export default Router;
