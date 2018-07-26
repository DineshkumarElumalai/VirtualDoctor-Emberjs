import Ember from 'ember';
var category = "general";
export default Ember.Service.extend({
    stompClient: null,
    connected: false,
    messages: null,
    username: localStorage.getItem("loggedin"),
    feedback: "",
    category: localStorage.getItem("category"),
    init() {
        this._super(...arguments);
        this.set('messages', []);
    },
    add(user, message) {
        var chatMessage = {
            user: user,
            content: message,
            type: 'JOIN',
            category:category
        };
        this.get('messages').pushObject(chatMessage);
    },
    empty() {
        this.get('messages').clear();
    },
    connect() {
        this.clearFeedback();
        var comp = this;
        var socket = new SockJS('http://localhost:8080/ws');
        this.stompClient = Stomp.over(socket);
        this.stompClient.connect({}, function (/*frame*/) {
            comp.set('connected', true);
            comp.stompClient.subscribe('/topic/public/' + category, function (chatMessage) {
                var message = JSON.parse(chatMessage.body).content;
                var user = JSON.parse(chatMessage.body).user;
                
                comp.showMessage(user, message);
            });
        });
    },
    disconnect() {
        this.clearFeedback();
        if (this.stompClient != null) {
            this.stompClient.disconnect();
        }
        this.set('connected', false);
    },
    showMessage(user, message) {
        console.log(user,message,"hello")
        this.add(user, message);
    },
    sendMessage(message) {
        if (this.stompClient != null && this.get('connected')) {
            var chatMessage = {
                user: JSON.parse(this.username).username,
                content: message,
                type: 'CHAT',
                category:category
            };
            this.stompClient.send("/app/" + category + "/chat.sendMessage", {}, JSON.stringify(chatMessage));
        } else {
            this.set('feedback', 'You are not connected!');
        }
    },
    clearFeedback() {
        this.set('feedback', '');
    }
});
