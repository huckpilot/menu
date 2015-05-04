var DishesRoutes = Backbone.Router.extend({
  routes: {
    "": "allDishes",
    "dishes/new": "newDish",
    "dishes/:id": "showDish",
    "dishes/:id/edit": "editDish",
    "dishes": "allDishes"
  }, 
  showDish: function(anId){
    var thisDish = new Dish({id: anId})
    thisDish.fetch({
      success: function(){
        new DishView({model: thisDish}).render();
      }
    });
  }, 

  allDishes: function() {
    dishes.fetch({
      success: function(model, response) {
        // debugger;
        // var $newPetLink = $("#newDishLink");
        // var $aNew = $("<a />", {name : "link", href : "#dishes/new",text : "Add New Dish"});
        // $newPetLink.append($aNew);
        // $("#contentArea").html("");
        // $("#dishList").html("");
        // response.each(function(dish) {
        //   var $li = $("li");
        //   var $a = $("<a />", {href : "dishes/" + dish.id, text : dish.name});
        //   $li.append($a);
        //   $('#dishList').append($li);
        // })
        new DishesView({collection: dishes}).render();
      }
    });
  }
});


var dishRoutes = new DishesRoutes();

Backbone.history.start();

