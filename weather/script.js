

const apiKey = "6dc80175b44511e7ae07ff78fb566181";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather(){
			const response = await fetch(apiUrl + `&appid=${apiKey}`);
			var data = await response.json();

			console.log(data);
}
checkWeather();
