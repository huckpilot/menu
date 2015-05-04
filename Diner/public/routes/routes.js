var DishesRoutes = Backbone.Router.extend({
  routes: {
    "": "dishes",
    "dishes/new": "newDish",
    "dishes/:id": "showDish",
    "dishes/:id/edit": "editDish",
    "dishes": "allDishes"
  }
});

var dishRoutes = new DishesRoutes();

Backbone.history.start();

