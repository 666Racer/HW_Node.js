const http = require('http');
let counterArr = [0, 0, 0];
const server = http.createServer((req, res) => { // функция-обработчик
    console.log('Запрос получен');

    if (req.url === '/') {
        counterArr[0]++;
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end(`<h1> Добро пожаловать на мой сайт!</h1>
                    <a href="http://localhost:${port}/about">Перейти на About</a>
                    <h2>Количество посещений - ${counterArr[0]}</h2>
        `)
    } else if (req.url === '/about') {
        counterArr[1]++;
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end(`<h1>About</h1>
                    <a href="http://localhost:${port}">Перейти на главную</a>
                    <h2>Количество посещений - ${counterArr[1]}</h2>
        `)
    } else {
        counterArr[2]++;
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end(`<h1>Страница не найдена!</h1>
                    <h2>Количество посещений - ${counterArr[2]}</h2>
                `)
    }
})

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
})