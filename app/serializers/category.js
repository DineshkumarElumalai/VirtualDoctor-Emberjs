import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
       
        payload.category = {
            listOfCategory : payload.category,
            id:1
        }
        console.log(payload)
        return this._super(...arguments);
      },
});
