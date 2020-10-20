const express = require('express');
const app = express();
const port = process.env.PORT
app.listen(port, () => console.log('listening at ' + port));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));



app.post('/api',(request, response) => {
	
	console.log(request.body);
	const data = request.body;
	response.json({
		status: 'success',
		latitude: data.lat,
		longitude: data.lon
		
	});
});