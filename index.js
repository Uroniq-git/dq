const express = require('express')
const app = express()
const port = 5000
const request = require('request')

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.use(express.static(__dirname + "/build/"));

app.get(/.*/, function (req, res) {
    res.sendFile(__dirname + '/build/index.html');
});

app.post('/get_link', (req, res) => {
    request('https://api.crystalpay.ru/v1/?s=4345434894f1049041cbab1fba0aeebf1155fabd&n=vpnshop&o=receipt-create&amount=' + req.body.price + '&lifetime=60',
        (err, response, body) => {
        res.send(body)
    })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})