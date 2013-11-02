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

Shorty.ShortyNewController = Ember.ObjectController.extend({
  newShortyReady: false,

  actions: {
    save: function () {
      this.set('newShortyReady', true);
    }
  }
})