// var Character = Backbone.Model.extend({
//   initialize: function(){
//     console.log("Created a character!");
//   }
// });

//     app.Todo = Backbone.Model.extend({
//       defaults: {
//         title: '',
//         time: '',
//         completed: false
//       }, 
//       toggle: function(){
//         this.save({ completed: !this.get('completed')});
//       }
//     });

// Everything above is reference
// /////////////////////////////////////////////////////////////////////

var Dish = Backbone.Model.extend({
  urlRoot: '/dishes',
  validation: {
    name: {required: true, msg: 'Please enter a valid name'},
    price: {required: true}
    //'dish.name': {required: true}//,
    //age: {range: [1, 80]},
    //email: {pattern: 'email'},
    //someAttribute: function(value) {
      //if(value !== 'somevalue') {return 'Error message';}
    //}
  }
});
