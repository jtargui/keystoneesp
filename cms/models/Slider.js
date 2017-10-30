var keystone = require('keystone'), 
    Types = keystone.Field.Types;
 
/**
 * Slider Model
 * ==========
 */
 

var Slider = new keystone.List('Slider', { 
    autokey: { from: 'name', path: 'key', unique: true },
});


var canEdit = (user) => user.canEdit;
//console.log("canEdit " + isAdmin);
canEdit = "";
 
Slider.add({ 
	name: { type: String, required: true },
	createdAt: { type: Date, default: Date.now, noedit: true },
    link: { type: Types.Url, default: '#' },
    isVideo: { type: Types.Boolean, default: false },
    //responsive: { type: Types.Select, options: 'desktop, mobile', default: 'desktop', noedit: (user) => !user.canEdit },
    //responsive: { type: Types.Select, options: 'desktop, mobile', default: 'desktop', noedit: isAdmin},
    responsive: { type: Types.Select, options: 'desktop, mobile', default: 'desktop'},
    orderNumber: { type: Types.Number, default: 0 },
    state: { type: Types.Select, options: 'published, draft, archived', default: 'draft' },
	url: { type: Types.Url, default: '#', hidden: true },
/*
	image: {
		type: Types.File,
		dest: 'public/images',
		label: 'Image',
		allowedTypes: [
            'image/jpeg', 'image/png'
        ],
		format: function(item, file){
			return '<img src="../../images/'+file.filename+'" style="max-width: 300px; max-height: 80px">';
		},
	},*/

});
 
Slider.schema.pre('validate', function(next) {
	var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    if (this.isVideo && ! this.link.match(p)) {
        next(Error('Link must be a youtube link'));
    }
    else {
        next();
    }
});

Slider.defaultColumns = 'name, responsive, state, image' 
Slider.register(); 
