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
  // initialize: this.attributes.category = categories.get(this.atttributes.category_id), 
  // this.on('change:category_id', function(){
  //   console.log("Make that change")
  // });
  // validation: {
  //   name: {required: true, msg: 'Please enter a valid name'},
  //   price: {range: [1, 1000000]}
    //'dish.name': {required: true}//,
    //age: {range: [1, 80]},
    //email: {pattern: 'email'},
    //someAttribute: function(value) {
      //if(value !== 'somevalue') {return 'Error message';}
    //}
  // }
});

var Category = Backbone.Model.extend({
  urlRoot: '/categories',
});