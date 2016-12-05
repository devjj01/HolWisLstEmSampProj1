import Ember from 'ember';

export default Ember.Component.extend({

    idToEdit: 0,
    store: Ember.inject.service(),

    actions:{
          deleteItem(wishitem)
          {
              
            var id = wishitem.get('id');
             //console.log(wishitem.get('id'));
             //console.log(wishitem.get('recipient'));

            this.get('store').findRecord('wishitem', id, { backgroundReload: false }).then(function(wishitem) 
            {
               wishitem.destroyRecord(); // => DELETE to /wishitem/2
            });

          },

          editItem(wishitem)
          {        
             this.set('idToEdit', wishitem.get('id'));
            
            //console.log(wishitem.get('id'));
            //console.log('idToEdit');
          },

          updateItem(wishitem)
          {
            var id = wishitem.get('id');
            var purchaseDate = new Date(wishitem.get('purchaseDate'));
            var recipient = wishitem.get('recipient');
            var url = wishitem.get('url');
            var itemDetail = wishitem.get('itemDetail');

            //console.log(wishitem.get('id'));
            //console.log(wishitem.get('purchaseDate'));
            //console.log(wishitem.get('recipient'));
            //console.log(wishitem.get('url'));
            //console.log(wishitem.get('itemDetail'));

            this.get('store').findRecord('wishitem', id).then(function(item) {
                  // ...after the record has loaded
                  item.set('purchaseDate', purchaseDate);
                  item.set('recipient', recipient);
                  item.set('url', url);
                  item.set('itemDetail', itemDetail);

                  //item.save();
            } );

            this.set('idToEdit',0);
          },

          cancelItem(wishitem)
          {            
            wishitem.rollbackAttributes();

            this.set('idToEdit',0);
          }
        }
});
