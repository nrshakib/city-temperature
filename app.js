const API_KEY = `93750e4a04570d84fec1167730a57fbd`;

const searchTemp = () => {
    const city = document.getElementById('city-name').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    console.log(url);
    document.getElementById('city-name').value = '';
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemp = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    console.log(temperature);
    //set icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const icon = document.getElementById('icon');
    icon.setAttribute('src', url);
}

