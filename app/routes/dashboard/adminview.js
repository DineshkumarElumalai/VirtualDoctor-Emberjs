import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel(){
        var user = localStorage.getItem("loggedin")

        if (user === "null") {
            this.transitionTo('login')
        }
        // else if (JSON.parse(user).role == "ROLE_PATIENT")
        //     this.transitionTo('dashboard.patient')
        // else if (JSON.parse(user).rolee == "ROLE_DOCTOR")
        //     this.transitionTo('dashboard.doctor')
        // else if (JSON.parse(user).role == "ROLE_ADMIN")
        //     this.transitionTo('dashboard.adminview');
    },
    model(){
        
        return Ember.RSVP.hash({
         doctor:this.store.findAll('doctor'),
         
        })
     },
     setupController(controller, models){
         controller.set('doctor',models.doctor)  
     }
 
});
