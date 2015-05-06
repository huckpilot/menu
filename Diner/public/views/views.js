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

      if(newName == null || (newPrice < 1 && newPrice != NaN) || newImageUrl == null ) {
        alert("Enter everything you fucker");
      } 
      else {
        this.model.set({name: newName, price: newPrice, image_url: newImageUrl});
        this.model.save();
      }
    }, 

    editDish: function() {
      this.$("span.view").hide();
      this.$("span.editDish").show();
    }, 

    deleteDish: function() {
      this.model.destroy();
    }, 

    render: function() {
      $(this.$el[0]).addClass("col-md-6");
      this.$el.html(this.template({link: location.origin+"#dishes/"+this.model.id,dish: this.model.toJSON()}));
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
    el: "#addDishForm", 
    events: {"click button#addNewDish": "createDish"},
    template: _.template($('#addForm').html()),
    // initialize: function() {
    //   Backbone.Validation.bind(this);
    // },

    createDish: function() {
      var nameField = this.$("#newDishName");
      var priceField = this.$("#newDishPrice");
      var imageField = this.$("#newDishImage");
      var name = nameField.val();
      var price = priceField.val();
      var image_url = imageField.val();
      if(name == null || (price < 1 && price != NaN) || image_url == null ) {
        alert("Enter everything you fucker");
      } 
      else {
        this.collection.create({name: name, price: price, image_url: image_url});
        nameField.val("");
        priceField.val("");
        imageField.val("");
      }
        
    }, 

    render: function() {
      this.$el.html(this.template({categories: categories.toJSON()}));
    }, 
    initialize: function() {
      this.listenTo(categories, "sync remove", this.render);
    }
  });



var CategoryView = Backbone.View.extend({
    tagName: 'li', 
    template: _.template($('#category').html()), 
    render: function() {
      debugger;
      var categoryDishes = dishes.where({category_id: this.model.id});
      console.log(categoryDishes);
      this.$el.html(this.template({category: this.model.toJSON(), dishes: categoryDishes}));
    }
});

var CategoriesView = Backbone.View.extend({
  el: "ul#CategoryList", 
  render: function() {
    var categoriesUl = this.$el;
    categoriesUl.html("");
    //console.log(this);
    this.collection.forEach(function(category) {
      categoriesUl.append(new CategoryView({model: category}).render());
    });
      return this;
    }
});
  


  new CreateDishView({collection: dishes});











