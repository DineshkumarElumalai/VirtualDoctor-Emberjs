import Component from '@ember/component';
import { inject as service } from '@ember/service';
const { $ } = Ember;
var user = localStorage.getItem("loggedin");
var username = JSON.parse(user).username;
var colors = [
    '#2196F3', '#32c787', '#00BCD4', '#ff5652',
    '#ffc107', '#ff85af', '#FF9800', '#39bbb0'
];
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
    init() {
        this._super(...arguments);
        this.get('client').connect();
        this.set("color",this.getAvatarColor(username)) 
    },
    actions: {
        connect() {
            this.get('client').connect();
        },
        visible(){
            console.log("hello")
            this.set('visible',true)
        },
        disconnect() {
            this.get('client').disconnect();
        },
        sendMessage(message) {
            this.get('client').sendMessage(message);
            this.message="";
        },
        
    },
    getAvatarColor(messageSender) {
        var hash = 0;
        for (var i = 0; i < messageSender.length; i++) {
            hash = 31 * hash + messageSender.charCodeAt(i);
        }
        var index = Math.abs(hash % colors.length);
        return colors[index];
    }

});
