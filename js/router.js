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
  this.resource('shorties', { path: '/all' }, function () {
    this.route('new', { path: '/add' });
  });
});

Shorty.ApplicationRoute = Ember.Route.extend({
  actions: {
    error: function (reason) {
      if (reason.status == 404)
        this.transitionTo('not_found')
    },

    closeModal: function () {
      this.render('hide_modal', { into: 'modal', outlet: 'modalBody' });
    },

    login: function () {
      Shorty.ApplicationRoute.showModal(this, 'login', null);
    }
  }
});

Shorty.ApplicationRoute.reopenClass({
  showModal: function (router, name, model) {
    router.render(name, { into: 'modal', outlet: 'modalBody' })
    controller = router.controllerFor(name)

    if (controller && model)
      controller.set('model', model)
  }
});

Shorty.IndexRoute = Ember.Route.extend({
  model: function (){
    return shorties;
  },

  renderTemplate: function () {
    this.render('index')
  }

});

Shorty.ShortiesRoute = Ember.Route.extend({
  model: function () {
    return shorties;
  },

  renderTemplate: function () {
    this.render('shorties')
  }
});


Shorty.ModalBodyView = Ember.View.extend({
  didInsertElement: function () {
    $('#shortyModal').modal('show');
  }
});

Shorty.HideModalView = Shorty.ModalBodyView.extend({
  didInsertElement: function () {
    $('#shortyModal').modal('hide');
  }
});

Shorty.LoginView = Shorty.ModalBodyView.extend({
  templateName: 'login'
});










