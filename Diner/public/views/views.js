$(document).ready(function() {
  var DishView = Backbone.View.extend({
    tagName: 'li', 
    template: _.template($('#dishes').html()), 
    events: {
      "click button.destroyButton" : "deleteDish",
      "click button.editButton" : "editDish",
      "click button.updateButton" : "updateDish" 
    }, 

    updateDish: function() {
      var newName = this.$('#newName' + this.model.id).val();
      var newPrice = this.$('#newPrice' + this.model.id).val();
      var newImageUrl = this.$('#newImageUrl' + this.model.id).val();

      this.model.set({name: newName, price: newPrice, image_url: newImageUrl});

      this.model.save();
    }, 

    editDish: function() {
      this.$("span.view").hide();
      this.$("span.editDish").show();
    }, 

    deleteDish: function() {
      this.model.destroy();
    }, 

    render: function() {
      this.$el.html(this.template({dish: this.model.toJSON()}));
      return this;
    }
  });

  var DishesView = Backbone.View.extend({
    el: "ul#dishList", 
    initialize: function() {
      this.listenTo(this.collection, "sync remove", this.render);
    }, 
    render: function() {
      var dishes = this.$el;
      dishes.html("");
      console.log(this);
      this.collection.each(function(dish) {
        dishes.append(new DishView({model: dish}).render().$el);
      });

      return this;
    }
  });

  var CreateDishView = Backbone.View.extend({
    validation: {name: {required: true}},
    el: "#addDishForm", 
    events: {"click button#addNewDish": "createDish"},

    createDish: function() {

      var nameField = this.$("#newDishName");
      var priceField = this.$("#newDishPrice");
      var imageField = this.$("#newDishImage");
      var name = nameField.val();
      var price = priceField.val();
      var image_url = imageField.val();

      this.collection.create({name: name, price: price, image_url: image_url});

      nameField.val("");
      priceField.val("");
      imageField.val("");
    }
  });

  new DishesView({collection: dishes});
  new CreateDishView({collection: dishes});
});









