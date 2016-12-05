import DS from 'ember-data';

export default DS.Model.extend({
    purchaseDate: DS.attr('date'),
    recipient: DS.attr('string'),
    url: DS.attr('string'),
    itemDetail: DS.attr('string')
});
