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
  initialize: function(){
    console.log("Created a dish");
  }
});
