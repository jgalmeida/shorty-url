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
    this.render('index');
  }

});

Shorty.ShortiesRoute = Ember.Route.extend({
  model: function () {
    return shorties;
  },

  renderTemplate: function () {
    this.render('mainLayout');
    this.render('shorties', { into: 'mainLayout' });
  }
});

Shorty.ShortiesIndexRoute = Ember.Route.extend({
  setupController: function (model, controller) {
    controller.set('model', this.modelFor('shorties'));
  },

  renderTemplate: function () {
    this.render('shorties', { into: 'mainLayout' });
  }
});

Shorty.ShortyNewRoute = Ember.Route.extend({
  model: function () {
    return {};
  },

  renderTemplate: function () {
    this.render('mainLayout');
    this.render('shorty_new', { into: 'mainLayout' });
  },

  deactivate: function () {
    this.controllerFor('shorty_new').set('newShortyReady', false);
  }
});

Shorty.UserSettingsRoute = Ember.Route.extend({
  model: function () {
    //return current user
    return;
  },

  renderTemplate: function () {
    this.render('mainLayout');
  }
});

Shorty.UserSettingsEditProfileRoute = Ember.Route.extend({
  setupController: function (model, controller) {
    controller.set('model', this.modelFor('user_settings'))
  }
});

Shorty.UserSettingsEditPasswordRoute = Ember.Route.extend({
  setupController: function (model, controller) {
    controller.set('model', this.modelFor('user_settings'))
  }
});