
const greetings = document.getElementById('greetings-actual');
const day = document.getElementById('day-actual');
const time = document.getElementById('time-actual');
const tilNewYear = document.getElementById('til-ny-actual');

const getDayActual = (date) => {
    let dayActual = date.toLocaleDateString('ru', { weekday: 'long' });
    let trimmed = dayActual.charAt(0).toUpperCase() + dayActual.slice(1);
    //В русской локализации дни недели с маленькой буквы.
    day.textContent = trimmed;
};
const getTimeActual = (date) => {
    let timeActual = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    time.textContent = timeActual;
};
const getGreetingsActual = (date) => {
    let greetingsActual = date.getHours();

    if (greetingsActual >= 7 && greetingsActual <= 11) {
        greetings.textContent = 'утро';
    }
    if (greetingsActual >= 12 && greetingsActual <= 17) {
        greetings.textContent = 'день';
    }
    if (greetingsActual >= 18 && greetingsActual <= 23) {
        greetings.textContent = 'вечер';
    }
    if (greetingsActual >= 0 && greetingsActual <= 6) {
        greetings.textContent = 'ночь';
    }
};
const getTilNewYear = (date) => {
    let oneDay = 24 * 60 * 60 * 1000;
    let nowDate = date.getFullYear();
    let endDate = new Date(`${nowDate + 1}`);
    let remains = Math.floor((endDate - date) / oneDay);

    tilNewYear.textContent = remains;
};

const timer = () => {
    let date = new Date();

    getDayActual(date);
    getTimeActual(date);
    getGreetingsActual(date);
    getTilNewYear(date);

};
timer();
setInterval(timer, 1000);
