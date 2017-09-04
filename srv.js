/**
 * Created by liwenjun on 2017/9/4.
 */
const express = require('express')
const proxy = require('http-proxy-middleware')
const serveIndex = require('serve-index')

const app = express();

let pathToOnline = "http://localhost:19090";

const proxyOptions = [
    [['/api'], {target: pathToOnline, changeOrigin: true, logLevel: 'debug'}],
];

for (let option of proxyOptions) {
    app.use(proxy(...option))
}

app.use('/', serveIndex("./"))
app.use('/', express.static("./"))

const port = "8888";

app.listen(port,err => {
    if (err) {
        console.log(err)
        return
    }
    console.log(`Listening at http://localhost:${port}\n`)
});