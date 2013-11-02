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