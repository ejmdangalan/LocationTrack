	
	if ('geolocation' in navigator){
			
			console.log('geolocation available');
			navigator.geolocation.getCurrentPosition(async position => {
				
				const lat = position.coords.latitude;
				const lon = position.coords.longitude;
				const timestamp = new Date(Date.now()).toLocaleString();
			
				
				const data = { lat, lon, timestamp};
				const options = {
				method: 'POST',
				headers: {
					'Content-Type':'application/json'
				},
				body: JSON.stringify(data)

				};
				const response = await fetch('/api',options);
				const json = await response.json();
				console.log(json);
				
			
				//console.log(position.coords);
			});
		
		} else {
		
			console.log('geolocation not availabale');
		
		}
	
		