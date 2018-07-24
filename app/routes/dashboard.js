import Route from '@ember/routing/route';
import category from '../models/category';

export default Route.extend({
    beforeModel() {
        var user = localStorage.getItem("loggedin")
        // console.log( user)
        if (user === "null") {
            this.transitionTo('login')
        }
        else if (JSON.parse(user).role == "ROLE_PATIENT")
            this.transitionTo('dashboard.patient')
        else if (JSON.parse(user).rolee == "ROLE_DOCTOR")
            this.transitionTo('dashboard.doctor')
        else if (JSON.parse(user).role == "ROLE_ADMIN")
            this.transitionTo('dashboard.admin');

    },
    model(){
       return this.store.findAll('category');
    }

});
