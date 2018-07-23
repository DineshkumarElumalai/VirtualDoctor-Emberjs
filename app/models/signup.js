import DS from 'ember-data';

export default DS.Model.extend({
    username: DS.attr(),
    name: DS.attr(),
    email: DS.attr(),
    password: DS.attr(),
    message:DS.attr(),
    success:DS.attr()
});
