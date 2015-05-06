// represents a collection of Mario Kart characters

// var CharacterCollection = Backbone.Collection.extend({
//   model: Character,
//   url: '/characters'
// });

// var characters = new CharacterCollection();

// get all the characters from the server
// characters.fetch();

//     app.TodoList = Backbone.Collection.extend({
//       model: app.Todo,
//       localStorage: new Store("backbone-todo"), 
//       completed: function() {
//         return this.filter(function( todo ) {
//           return todo.get('completed');
//         });
//       }, 
//       remaining: function() {
//         return this.without.apply( this, this.completed() );
//       }
//     });

//     // instance of the Collection
//     app.todoList = new app.TodoList();

//Everything above this is reference
//////////////////////////////////////////////////

var CategoriesCollection = Backbone.Collection.extend({
  model: Category, 
  url: '/categories'
});

var DishesCollection = Backbone.Collection.extend({
  model: Dish, 
  url: '/dishes'
});

var dishes = new DishesCollection();

var categories = new CategoriesCollection();

