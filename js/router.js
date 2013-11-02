shorties =
        [
          {
            url: 'www.facebook.com',
            shortUrl: 'shorty.com/3asf2d',
            clicks: 10,
            when: '2013-01-01'
          },
          {
            url: 'www.google.com',
            shortUrl: 'shorty.com/e2j323',
            clicks: 1,
            when: '2013-05-19'
          },
          {
            url: 'www.youtube.com',
            shortUrl: 'shorty.com/da24d',
            clicks: 23,
            when: '2013-03-21'
          }
        ];

Shorty.Router.map(function (){
  this.route('index', { path: '/' });
  this.resource('shorties', { path: '/all' }, function () {
    this.route('new', { path: '/add' });
  });
});

Shorty.IndexRoute = Ember.Route.extend({
  model: function (){
    return shorties;
  },

  renderTemplate: function () {
    this.render('outside');
    this.render('index', { into: 'outside' })
  }

});


Shorty.ShortiesRoute = Ember.Route.extend({
  model: function () {
    return shorties;
  },

  renderTemplate: function () {
    this.render('main');
    this.render('shorties', { into: 'main' })
  }
});

















