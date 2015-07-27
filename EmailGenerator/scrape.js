app.get('/scrape', function(req, res){

 url = "http://p0.vresp.com/7AqdMy"

	exports.request(url, function(error, response, html){

		if(!error){
			var $ = cheerio.load(html);

			var title, name, emailurl;
			var json = { title : "", name : "", url : ""};

			$('.headline').filter(function(){
		        var data = $(this);
		        title = data.text();

		        json.title = title;

	        })

			$('.container').filter(function(){
		        var data = $(this);
		        name = data.find().last().text();

		        json.name = name;
		        json.url = emailurl;

	        })

		}

		exports.fs.appendFile('output.json', JSON.stringify(json, null, 4), function(err){
        	console.log('File successfully written! - Check your project directory for the output.json file');
        	console.log(title);
        	console.log(name);
        	console.log(url);
        })

        res.send('Check your console!')

	})

})
