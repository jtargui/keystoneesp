/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.get('/', routes.views.index);

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

    app.getVersion = function(){
        return "0.0.1";
    };

    app.getObjVersion = function(){
        var obj = {
            version: app.getVersion()
        }
        return obj;        
    }

    var responseHeaders = {  
        "access-control-allow-origin": "*",
        "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
        //"access-control-allow-headers": "content-type, accept",
        //"access-control-allow-headers": "*",
        "access-control-allow-headers": "content-type, accept, X-XSRF-TOKEN",
        "access-control-max-age": 10
    };

    var responseHeadersJson = {  
        "access-control-allow-origin": "*",
        "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
        "access-control-allow-headers": "content-type, accept, X-XSRF-TOKEN",
        //"access-control-allow-headers": "*",
        "access-control-max-age": 10,
        "Content-Type": "application/json"
    };

    app.options("*",function(request, response, next){
        response.removeHeader('access-control-allow-origin');
        response.writeHead(200, responseHeadersJson);
        response.end();

    });

    app.get('/api/version', function(request, response){
        response.setHeader('access-control-allow-origin', '*');

        var obj = app.getObjVersion();
        response.json(obj);
    });

    app.get('/api/gallery/list', function(request, response){
        response.setHeader('access-control-allow-origin', '*');

    
        var url = getUrl(request);

        var Slider = keystone.list('Slider');
        //console.log(Slider);

        Slider.model.find()
            .where('state', 'published')
            //.where('name', /1/i) // Buscar con una regex
            .sort([['responsive', 1], ['orderNumber', 1]])
            .exec(function(err, items) {
                //console.log(items);

                var index, len;
                for (index = 0, len = items.length; index < len; ++index) {
                    //items[index]['link'] = url ; //+ items[index]['image']['path'] + '/' + items[index]['image']['filename'];
                    //items[index]['url'] = items[index]['url'].replace('/public', '');
                    
                    //console.log(items[index]);
                }

                response.json(items);
            });


        //response.send('Gallery list.')
    });

    function getUrl(request){
        var port = process.env.PUBLIC_PORT || request.socket.localPort;
        var host = process.env.PUBLIC_URL || request.hostname;
        if(parseInt(port)===80){
            port = "";
        }else{
            port = ':' + port;
        }
        var url = request.protocol  + '://' + host + port + '/';

        return url;
    }

};
