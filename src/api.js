export async function getWeather(city) {
    const weatherResponse = await fetch(`http://api.weatherapi.com/v1/current.json?key=7adddfefbe794a64a82202757220601&q=${city}`);

    const jsonResponse = await weatherResponse.json();
    return jsonResponse.current.temp_c;
}