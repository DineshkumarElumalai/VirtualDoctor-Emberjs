import Component from '@ember/component';
import { inject as service } from '@ember/service';
const { $ } = Ember;
export default Component.extend({

    auth: service('chat'),

    // init() {
    //     this._super(...arguments);
    //     this.sockjs.on('messageReceived', this, 'messageReceived');
    // },
    // messageReceived(message) {
    //     $('#chat-content').val((i, text) =>
    //         `${text}${message}\n`
    //     );
    //     this.set('message', message);
    // },
    // actions: {
    //     enter(info, username) {
    //         this.sockjs.sendInfo(`${username}: ${info}`);
    //     }
    // }
});
