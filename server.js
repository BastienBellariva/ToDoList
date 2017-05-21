//Appel d'Express
let app = require('express')()

//Appel de EJS
app.set('view engine', 'ejs')

//Page d'accueil
app.get('/', (request, response) => {
    response.render('pages/index', {test: "Salut"})   
})

app.listen(8000)