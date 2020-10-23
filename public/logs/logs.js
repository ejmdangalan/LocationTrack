		getData();
		async function getData() {
		
			const response = await fetch('/api');
			const data = await response.json();
			
			for (item of data) {
				const root = document.createElement('div');
				const date = document.createElement('div');
				const geo = document.createElement('div'); 
				
				
				
				geo.textContent = item.lat + ', ' + item.lon;
				
				date.textContent = item.timestamp;
				
				root.append(geo, date);
				document.body.append(root);
			
			}
			
			console.log(data);
			
		}
		