App = Ember.Application.create();

App.Router.map(function() {
	this.resource('home');
	this.resource('post', function() {
		this.resource('posts', { path: ':posts_id' })
	});
});

App.IndexRoute = Ember.Route.extend({
	beforeModel: function() {
	    this.transitionTo('home');
	}
    });

App.PostRoute = Ember.Route.extend({
  model: function() {
    return posts;
  }
});

App.PostsRoute = Ember.Route.extend({
  model: function(params) {
    return posts.findBy('id', params.post_id);
  }
});

Ember.Handlebars.helper('format-date', function(date) {
	return moment(date).fromNow();
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
	return new Handlebars.SafeString(showdown.makeHtml(input));
});

var posts = [{
	id: '1',
	title: "Test Blog 1",
	author: { name: 'Lon' },
	date: new Date('12-13-13'),
	excerpt: 'First!',
	body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque nibh sit amet quam eleifend pellentesque. Mauris aliquam tortor orci, ut placerat massa consectetur in. In hac habitasse platea dictumst. Phasellus eu adipiscing erat. Nullam quis tincidunt nulla. Vestibulum accumsan libero ac diam posuere pretium. Integer porta vitae libero a laoreet. Fusce nec mattis eros. Donec vestibulum laoreet dolor in pulvinar. Duis at neque eget felis ornare ultricies non id diam. Donec nec nisi sit amet nunc sollicitudin placerat. Sed luctus turpis sed mauris ultricies fringilla. Maecenas congue, elit eget cursus molestie, eros magna volutpat est, vel pharetra est ligula sit amet erat. Quisque adipiscing ligula nisi, ut ornare sem laoreet nec.'
}, {
	id: '2',
	title: 'Test Blog 2',
	author: { name: 'Lon' },
	date: new Date('2-13-13'),
	excerpt: 'Hai',
	body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium iaculis velit id interdum. Pellentesque iaculis sit amet orci quis scelerisque. Proin porta, nisi in dignissim porttitor, ante mauris suscipit purus, non accumsan mauris massa eleifend risus. Integer lacinia condimentum nulla. Integer rutrum nisl eget sollicitudin lobortis. Quisque rhoncus magna nec elit feugiat tempor. Sed blandit pharetra velit, quis accumsan mi bibendum vel. Cras quis tempor diam. Proin eu scelerisque nunc. Donec sollicitudin molestie arcu at posuere. Vestibulum ut elit dui. Duis auctor egestas nunc, placerat vestibulum arcu adipiscing nec. Cras scelerisque volutpat erat, in auctor sem. Phasellus mi sem, sagittis ac porttitor ut, facilisis ut sem.'
}];