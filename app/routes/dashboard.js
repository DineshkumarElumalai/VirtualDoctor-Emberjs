import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        var user = localStorage.getItem("loggedin")
        console.log( user)
        if (user === "null") {
            this.transitionTo('login')
        }
        else if (JSON.parse(user).role == "ROLE_PATIENT")
            this.transitionTo('dashboard.patient')
        else if (JSON.parse(user).rolee == "ROLE_DOCTOR")
            this.transitionTo('dashboard.patient')
        else if (JSON.parse(user).role == "ROLE_ADMIN")
            this.transitionTo('dashboard.admin');

    },
    model(){
        var user = localStorage.getItem("loggedin")
        var username = "";
        if (user === "null") {
            username = "";
        }else{
            username = JSON.parse(user).username;
            console.log(username)
        }
       return username
    }

});
