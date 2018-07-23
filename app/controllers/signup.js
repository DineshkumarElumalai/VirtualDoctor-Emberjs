import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        signup: function () {
            if (this.get('name') != undefined && this.get('email') != undefined && this.get('username') != undefined && this.get('password') != undefined && this.get('cpassword') != undefined) {
                if (this.get('password') === this.get('cpassword')) {

                    let rec = this.store.createRecord('signup', { name: this.get('name'), username: this.get('username'), email: this.get('email'), password: this.get('password') })
                    rec.save().then((result) => {
                        console.log(result)
                        this.transitionToRoute("login")
                    }).catch((err)=>{
                        console.log(err);
                        alert("please enter valid credentials")
                    })
                }
                else {
                    alert("Verify password and confirm password")
                }
            }
            else {
                alert("Please fill all the details")
            }

        },
        transitionToLogin: function (result) {
            console.log(result)
        }
    }
});
