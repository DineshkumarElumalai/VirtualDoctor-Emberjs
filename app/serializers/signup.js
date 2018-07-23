import DS from 'ember-data';
import Ember from 'ember';


export default DS.RESTSerializer.extend({
    
    serializeIntoHash(hash, typeClass, snapshot, options) {
        var normalizedRootKey = this.payloadKeyFromModelName(typeClass.modelName);
        Ember.merge(hash, this.serialize(snapshot, options));
    },
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        console.log(payload.success);
        
        payload.signup = {
            success : payload.success,
            message : payload.message
        }
        payload.id = 1

        delete payload.success
        delete payload.message

        console.log(payload);

        return this._super(...arguments);
      },

    
});
