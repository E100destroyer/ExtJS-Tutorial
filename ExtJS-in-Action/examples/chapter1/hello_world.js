var tpl = Ext.create('Ext.Template', [
  'Hello {fristName} {lastName}!',
  'Nice to meet you!'
]);
var formPanel = Ext.create('Ext.form.FormPanel', {
  itemId: 'fromPanel',
  frame: true,
  layout: 'anchor',
  defaultType: 'textfield',
  defualts: {
    anchor: '-10',
    labelWidth: 65
  },
  items: [{
    fieldLabel: 'Frist name',
    name: 'firstName'
  }, {
    fieldLabel: 'Last name',
    name: 'lastName'
  }],
  buttons: [{
    text: 'Submit',
    handler: function() {
      var formPanel = this.up('#fromPanel'),
        vals = formPanel.getValues(),
        greeting = tpl.apply(vals);

      Ext.Msg.alert('Hello!', greeting);
    }
  }]
});

Ext.onReady(function() {

  Ext.create('Ext.window.Window', {
    height: 125,
    width: 200,
    closable: false,
    title: 'Input needed.',
    border: false,
    layout: 'fit',
    items: formPanel
  }).show();
});
