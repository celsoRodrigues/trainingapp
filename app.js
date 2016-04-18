var express=require('express');
var app=express();
app.set('port', process.env.PORT||process.argv[2]||3000);
app.use(express.static(__dirname+'/public'));

app.get('/about',function(req, res){
	res.send('about');

});

app.listen(app.get('port'), function(){
	console.log('Server started at localhost:'+app.get('port')+'. Please press ctrl+c to kill it');

});
