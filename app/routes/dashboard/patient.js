import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        var user = localStorage.getItem("loggedin")
        if (user === "null") 
            this.transitionTo('login')
        // else if (JSON.parse(user).role == "ROLE_PATIENT")
        //     this.transitionTo('dashboard.patient')
        // else if (JSON.parse(user).rolee == "ROLE_DOCTOR")
        //     this.transitionTo('dashboard.patient')
        // else if (JSON.parse(user).role == "ROLE_ADMIN")
        //     this.transitionTo('dashboard.admin');
    }
});
