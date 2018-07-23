import DS from 'ember-data';

export default DS.Model.extend({
    usernameOrEmail: DS.attr(),
    password: DS.attr()
});
