import Component from '@ember/component';
import { inject as service } from '@ember/service';


export default Component.extend({
    auth: service('authentication'),
    username: Ember.computed(function(){
        var user = localStorage.getItem("loggedin");
        let username = JSON.parse(user).username
        return username;
    }),
    actions:{
        
        logout(){
            this.get('auth').logout().then((result)=>{
                alert(result);
                this.get('router').transitionTo('login')
            })
        }
    }
});
