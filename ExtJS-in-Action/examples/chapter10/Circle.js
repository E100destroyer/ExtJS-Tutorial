Ext.onReady(function() {
	var dc = Ext.create('Ext.draw.Component',{
		viewBox		: 	true,//默认值为true会造成定义值被忽略
		autoSize	: 	true,
		items		: [{
			type	: 	'circle',
			fill	: 	'#79BB3F', 
			radius	: 	100,
			x		: 	200,
			y		: 	200
		}]
	});



	Ext.create('Ext.window.Window',{
		width 		: 600, 
		height		: 400,
		autoShow	: true,
		title		: 'Simple Cirle',
		maximizable : true,
		layout		: 'fit',
		items		: [dc],
		resizable	: {
			dynamic	: true
		}
	});
});