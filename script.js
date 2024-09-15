// step 1 : let Declare the Variable first
let inputFeild = document.getElementById('locationInput')

// step 2 : Create a function to fetch weather data from the API
function getWheather(){
    let inputLocation = inputFeild.value

    // Get Location first
    const locationName = document.getElementById('locationName')
    locationName.innerHTML = inputLocation
    inputFeild.value = ''


    // Get Weather and Location
    const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${inputLocation}&format=json&u=f`;
    const options = {
	 method: 'GET',
	 headers: {
		'x-rapidapi-key': 'd710291ac6msh7232aadaedb4733p1dd678jsn8a192c3a62a2',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	 }
    };

    // Define variables in the outer scope
    let temp, humidity, windSpeed, desc;

    async function fetchData() {
    	try {
    		const response = await fetch(url, options);
    		const result = await response.json();

            console.log(result)

            // Extract relevant data
            temp = result?.current_observation?.condition?.temperature;
            humidity = result?.current_observation?.atmosphere?.humidity;
            windSpeed = result?.current_observation?.wind?.speed;
            desc = result?.current_observation?.condition?.text;

            // Update the DOM with the weather data after fetching it
            document.getElementById('temperature').innerText = `Temperature: ${temp}°F`;
            document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
            document.getElementById('windSpeed').innerText = `Wind Speed: ${windSpeed} km/hr`;
            document.getElementById('weatherDescription').innerText = `Description: Today we have ${desc} Day`;


    
    	} catch (error) { console.error(error); }
    }
    
    fetchData();

}
