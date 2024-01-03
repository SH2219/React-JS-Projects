async function fetchData() {
	const url = 'https://weather338.p.rapidapi.com/locations/search?query=san%20fran&language=en-US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bd90ec153dmshd196f5d1c845421p119d6ejsn9eb1ab3e84f2',
		'X-RapidAPI-Host': 'weather338.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}}

fetchData()
