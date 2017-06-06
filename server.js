//Appel
let express = require('express') //Express
let app = express() //Express
let bodyParser = require('body-parser') //Body-Parser
let session = require('express-session') //Session

//Our Middleware
app.set('view engine', 'ejs') //EJS
app.use(bodyParser.urlencoded({ extended: false})) //Body-Parser
app.use(bodyParser.json()) //Body-Parser
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
})) //Session
app.use(require('./middlewares/flash'))

//Template Motor
app.use('/assets', express.static('public')) //CSS  

//Our way
//Home page
app.get('/', (request, response) => {
    let Task = require('./models/task')
    Task.all(function(tasks){
        response.render('pages/index', {tasks: tasks}) 
    })
})

//Task management
app.post('/', (request, response) => {
    if(request.body.task === undefined || request.body.task === '') {
        request.flash('error', "Vous n'avez pas entré de tâche")
        response.redirect('/')
    } else {
        let Task = require('./models/task')
        Task.create(request.body.task, function(){
            request.flash('success', "Merci !")
            response.redirect('/')
        })
    }
})

app.get('/delete/:id', (request, response) => {
    if(request.params.id != '' && request.params.id != undefined) {
        let Task = require('./models/task')
        Task.delete(request.params.id, function(){
            response.redirect('/')
        })
    }
    
})

app.listen(8080) 