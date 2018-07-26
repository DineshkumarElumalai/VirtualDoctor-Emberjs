import Component from '@ember/component';
import { inject as service } from '@ember/service';
const { $ } = Ember;
var user = localStorage.getItem("loggedin");
var username = JSON.parse(user).username;
var colors = [
    '#2196F3', '#32c787', '#00BCD4', '#ff5652',
    '#ffc107', '#ff85af', '#FF9800', '#39bbb0'
];
// Ember.Handlebars.extend({
// registerHelper( passedString) {
//     var theString = passedString[0];
//     return new Handlebars.SafeString(theString)
// }
// });
export default Component.extend({
   
    auth: service('chat'),

    client: Ember.inject.service('chat'),
    message: "",
    // visible : false,
    username: Ember.computed(function(){
        var user = localStorage.getItem("loggedin");
        var username = JSON.parse(user).username
        return username;
    }),
    visible:"",
    color:"",
    
    
    init() {
        this._super(...arguments);
        this.get('client').connect();
        this.set('visible',true)
        this.set("color",this.getAvatarColor(username)) 
        // this.set("avatarText",)
    },
    actions: {
        connect() {
            this.get('client').connect();
        },
        visible(){
            
            this.set('visible',false)
            console.log(this.get("visible"))
        },
        disconnect() {
            this.get('client').disconnect();
        },
        sendMessage(message) {
            this.get('client').sendMessage(message);
            this.set("message","")
        },
        
    },
    getAvatarColor(messageSender) {
        var hash = 0;
        for (var i = 0; i < messageSender.length; i++) {
            hash = 31 * hash + messageSender.charCodeAt(i);
        }
        var index = Math.abs(hash % colors.length);
        console.log(colors[index]);
        return colors[index];
    }

});
