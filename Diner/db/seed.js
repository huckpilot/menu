var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("diner.db");
db.run("INSERT INTO categories (name) VALUES (?), (?)", "beer", "appetizers",  function(err){
  if(err) {
    throw err;
  }
});
db.run("INSERT INTO dishes (name, price, image_url, category_id) VALUES (?, ?, ?, ?)", "Beer", 9.99, "http://www.averagebetty.com/images/tortilla_soup_420_2spoons.jpg", 1, function(err){
  if(err) {
    throw err;
  }
});
db.run("INSERT INTO dishes (name, price, image_url, category_id) VALUES (?, ?, ?, ?)", "Sandwich", 4.99, "http://www.grotecompany.com/wp-content/uploads/2009/12/sandwich-production.jpg", 2, function(err){
  if(err) {
    throw err;
  }
});
