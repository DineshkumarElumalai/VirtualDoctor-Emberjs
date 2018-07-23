import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    auth: service('authentication'),
   
    actions: {
        login() {
            var self = this;
            var loginData = {};
            loginData["usernameOrEmail"] = this.get("email");
            loginData["password"] = this.get("password");
            //console.log(loginData);
            this.get('auth').login(loginData).then((result) => {
                
                localStorage.setItem("loggedin",JSON.stringify(result));

                self.transitionToRoute('dashboard');
            }).catch(err => {
                // alert(JSON.parse(err)["message"])
                console.log(err)
            })
        }
    }
});
