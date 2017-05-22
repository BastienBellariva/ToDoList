//Appel d'Express
let express = require('express')
let app = express()

//Appel de EJS
app.set('view engine', 'ejs')

//Appel du CSS
app.use('/assets', express.static('public'))

//Page d'accueil
app.get('/', (request, response) => {
    response.render('pages/index', {test: "Salut"})   
})

//Gestion du la task
app.post('/', (request, response) => {
    console.log(request)
})

app.listen(8000) 