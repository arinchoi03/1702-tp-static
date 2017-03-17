var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var nunjucks = require('nunjucks')
var db = require('./models').db;
var Place = require('./models').Place;
var Activity = require('./models').Activity;
var Hotel = require('./models').Hotel;
var Restaurant = require('./models').Restaurant



var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(morgan('dev'))

// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment
// instance, which we'll want to use to add Markdown support later.
var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);




app.use(function(err, req, res, next) {
	console.error(err)
	res.status(500)
	res.send(err, err.stack) //res.render('error')
})

db.sync({force: true})
	.then(function() {
		app.listen(3000, function(){
			console.log('Listening on 3000')
		}
	)}
)
