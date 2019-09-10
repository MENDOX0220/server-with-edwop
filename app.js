const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'adsfasdff',
    resave: false,
    saveUninitialized: true
}))

app.get('/', (req, res)=>{
    res.json(req.session)
})

app.get('/login', (req, res)=>{
    req.session.username = "iwop"
})

app.get('/logout', (req, res)=>{
    req.session.destroy(err =>{
        res.send("session destroyed")
    })
})

// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//     console.log('!!' + Date.now() + '!!')
//     next();
// })

// app.use('/static', express.static('public'));

// app.get('/', (req, res) => {
//     res.render('index', { title: "Pizza" });
// });

// app.get('/', (req, res) => {
//     res.sendfile("./public/index.html");
// });
// app.post('/success', (req, res) => {
//     res.status(200).send("Success");

// })

// app.post('/BadREquest', (req, res) => {
//     res.status(400).send("Bad Request");
// })

// app.post('/InternalServerError', (req, res) => {
//     res.status(500).send("Internal Server Error");
// })
app.listen(8080, () => console.log("start"));