const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to Our Home Page')
    }
    if (req.url === '/about') {
        res.end('This is a little bit about us')
    }

    res.end(`
    <head>Oops!</head>
    <p>It appears that this page dosent exist</p>
    <a href="/">Back home</a>
    `)
})


server.listen(2000)