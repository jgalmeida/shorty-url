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
  this.route('not_found', { path: '/404' });
  this.resource('user_settings', { path: '/admin' }, function () {
    this.route('edit_profile',   { path: '/edit/profile'  });
    this.route('edit_password',  { path: '/edit/password' });
  });
  this.route('shorties',   { path: '/all' });
  this.route('shorty_new', { path: '/add' });
});