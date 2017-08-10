Ext.onReady(function(){
	var dc = Ext.create('Ext.draw.Component',{
		viewBox 	: false,
		autoSize 	: false,
		items		: [{
				type 	: 'circle',
				fill 	: '#79BB3F',
				radius	: 100,
				x		: 200,
				y		: 200
			}]
	});

Ext.create('Ext.window.Window',{
	width		: 	600,
	height		: 	400,
	autoShow	: 	true,
	title 		: 	'Dynamically adding a new sprite to surface with a 2-sec delay',
	maximizable : 	true,
	layout 		: 	'fit',
	items 		: 	[dc],
	resizable 	: 	{
		dynamic : true
	},
		listeners : {
				show : function(){
					var sprite = dc.surface.add({
						type 	: 'circle',
						fill 	: '#846393',
						stroke	: '#a54222',
						'stroke-width' : 5,
						opacity	: .8,
						radius 	: 100,
						x : 300,
						y : 200
					});
					sprite.show(true);
				}
		}
	});
});