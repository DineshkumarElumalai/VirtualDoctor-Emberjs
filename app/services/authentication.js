
import Service from '@ember/service';
import { Promise } from 'rsvp'
//import { inject } from '@ember/service'


var BASE_URL = "http://localhost:8080/api/auth"
export default Service.extend({
    ajax: Ember.inject.service(),
    login: function (loginData) {
        // return ajax({type: 'POST', url: BASE_URL+'/logins', data: credentials})
        //   .then(bind(this, 'authenticationDidSucceed'));
        return this.get('ajax').request(BASE_URL+'/logins', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: loginData
        });
    },
    logout: function () {
        localStorage.setItem("loggedin",null);
        return Promise.resolve("successfully logged out");
    }
});
