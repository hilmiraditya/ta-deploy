const express = require('express')
const app = express()
const port = 3000

messages = {
    status : true,
    messages : 'Hello World',
    version : 1.0
}

app.get('/', (req, res) => res.json(messages))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))