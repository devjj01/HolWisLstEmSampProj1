import Ember from 'ember';

export default Ember.Helper.extend({
  compute(params, hash) {
    let value = params[0];
    let newDate = new Date(value).toDateString();
    //console.log(formattedDate)
    return `${newDate}`;
  }
});