// let counters = {
//     "counterIndex:": 0,
//     "counterAbout:": 0
// }
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'counter.json');

const countersJSON = fs.readFileSync(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
const counters = JSON.parse(countersJSON);

const express = require('express');

const app = express();

const port = 3000;

// корневая страница
app.get('/', (req, res) => {
    fs.readFileSync(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
    counters.counterIndex++;
    fs.writeFileSync(filePath, JSON.stringify(counters, null, 2));
    res.send(`<h1>Добро пожаловать на сайт!</h1>
        <a href="/about">Перейти на страницу About</a>
        <h2>Количество посещений - ${counters.counterIndex}</h2>`)
});
// Страница обо мне
app.get('/about', (req, res) => {
    fs.readFileSync(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
    counters.counterAbout++;
    fs.writeFileSync(filePath, JSON.stringify(counters, null, 2));
    res.send(`<h1>Страница обо мне!</h1>
        <a href="/">Перейти на главную страницу</a>
        <h2>Количество посещений - ${counters.counterAbout}</h2>`)
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});