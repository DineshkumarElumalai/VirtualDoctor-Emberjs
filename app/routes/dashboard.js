import Route from '@ember/routing/route';
import category from '../models/category';
// import { Ember } from 'ember';

export default Route.extend({
    patient:function(){
        var user = localStorage.getItem("loggedin");
        let patient = JSON.parse(user).role
        return patient=="ROLE_PATIENT";
    }.property('userrole'),
    admin:function(){
        var user = localStorage.getItem("loggedin");
        var admin = JSON.parse(user).role
        return admin=="ROLE_ADMIN"
    }.property('admin'),
    doctor:function(){
        var user = localStorage.getItem("loggedin");
        var admin = JSON.parse(user).role
        return admin=="ROLE_ADMIN"
    }.property('doctor'),
    beforeModel() {
        var user = localStorage.getItem("loggedin")

        if (user === "null") {
            this.transitionTo('login')
        }
        else if (JSON.parse(user).role == "ROLE_PATIENT")
            this.transitionTo('dashboard.patient')
        else if (JSON.parse(user).rolee == "ROLE_DOCTOR")
            this.transitionTo('dashboard.doctor')
        else if (JSON.parse(user).role == "ROLE_ADMIN")
            this.transitionTo('dashboard');
        // this.set("admin",this.admin)
        // this.set("patient",this.patient)
        // this.set("doctor",this.doctor)
    },
    model(){
        
       return Ember.RSVP.hash({
        category:this.store.findAll('category'),
        admin:this.admin,
        patient:this.patient,
        doctor:this.doctor
       })
    },
    setupController(controller, models){
        controller.set('admin',models.admin),
        controller.set('patient',models.patient),
        controller.set('doctor',models.doctor),
        controller.set('category',models.category)
    }


});
