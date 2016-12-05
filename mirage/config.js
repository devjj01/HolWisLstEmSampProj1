export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  this.namespace = 'API';
  
  this.get('/wishitems');
  this.get('/wishitems/:id');

  this.post('/wishitems');
  this.post('/wishitems/:id');
  this.del('/wishitems/:id');

  //this.del('/wishitems/:id', (db, request) => {
  //  let id = request.params.id;
    //db.wishitems.remove(id);

 //  return new Mirage.Response(204, {}, {});
 // });

  //this.get('/wishitems/:id');
 
 
  //this.get('/users/:id', ['user', 'wishitems']);
    
  //this.get('/wishitems', ({ wishitems }, request) => {
  //     var id = request.params.user;
  //     return wishitems.where({ user: id });
  //});
   	
//this.get('/users/:id', function(db, request) {
//  var id = request.params.id;
//  return {
//    user: db.users.find(id),
//    wishitems: db.wishitems.where({ user_id: id })
//  };
//});


  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}
