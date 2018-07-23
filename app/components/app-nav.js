import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    auth: service('authentication'),
    model(){
        var user = localStorage.getItem("loggedin")
       var username = JSON.parse(user).username
       this.set("username",username)
    //    return JSON.parse(username)
    },
    actions:{
        
        logout(){
            this.get('auth').logout().then((result)=>{
                alert(result);
                this.transitionTo('login')
            })
        }
    }
    
});
