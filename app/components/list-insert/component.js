import Ember from 'ember';

export default Ember.Component.extend({

    store: Ember.inject.service(),
    actions:{
        insertItem : function(){
              var purchaseDate = new Date(this.get('purchaseDate'));
              var recipient = this.get('recipient');
              var url = this.get('url');
              var itemDetail = this.get('itemDetail');

              var itemData={
                   purchaseDate:purchaseDate,
                   recipient:recipient,
                   url:url,
                   itemDetail:itemDetail,
              };

              this.set('purchaseDate','');
              this.set('recipient','');
              this.set('url','');
              this.set('itemDetail','');

              var newItem = this.get('store').createRecord('wishitem',itemData);
              return newItem.save();
            }
        }

});
