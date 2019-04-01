// Backbone Model

var Blog = Backbone.Model.extend({
  defaults: {
    author: "",
    title: "",
    url: ""
  }
});

var Blogs = Backbone.Collection.extend({});

//create two new blogs
var blog1 = new Blog({
  author: "Micheal",
  title: "Micheal's Blog",
  url: "http://michealsblog.com"
});

var blog2 = new Blog({
  author: "John",
  title: "John's Blog",
  url: "http://johnsblog.com"
});

//collection
var blogs = new Blogs([blog1, blog2]);

//backbone views for a single blob
var BlogView = Backbone.View.extend({
  model:new Blog(),
  tagName:"tr",
  intialize ;function(){
    this.template= _.template($('.blogs-list-template'))
  }
});


//all logs
var BlogsView = Backbone.View.extend({});
