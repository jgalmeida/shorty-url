window.Shorty = Ember.Application.create({
  rootElement: '#shortyApp',
  LOG_ACTIVE_GENERATION: true
});


Shorty.LoginController = Ember.ObjectController.extend({
  actions: {
    login: function () {
      this.send('closeModal');
      this.transitionToRoute('shorties');
    },

    cancel: function () {
      this.send('closeModal');
    }
  }
});