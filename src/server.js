var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('../webpack.config');


var app = express();
app.set('port', (process.env.PORT || 3000));
app.use('/dist', express.static('dist'));
app.use(webpackDevMiddleware(webpack(webpackConfig)));

app.get('/', function(request, response, next){
    response.send('caca');
})

app.listen(app.get('port'), () => {
    console.log('servidor activo 1');;
});