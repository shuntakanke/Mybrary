const express =require("express")
const app = express()
const expressLayouts = require("express-ejs-layouts")

const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')

const connectDB = require('./config/db');

connectDB();

app.set('view engine', 'ejs')
app.set('views',__dirname + '/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

// body-parserがexpressで使える
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter)
app.use('/authors',authorRouter)


app.listen(process.env.PORT || 3000)