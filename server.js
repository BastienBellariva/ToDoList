let app = require('express.js')()

app.get('/', (request, response) => {
    response.send("Salut")
})

app.listen(8080)