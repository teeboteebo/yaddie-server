const express = require("express")
const bodyParser = require("body-parser")
const session = require("express-session")
const MongoStore = require("connect-mongo")(session)
const settings = require("./config/settings.json")
const connectToDb = require("./config/db")
const tagRoutes = require("./API/tagRoutes")
const recipeRoutes = require("./API/recipeRoutes")

connectToDb()

const app = express()

app.use(bodyParser.json())
app.get("/", (req, res) => res.send("Welcome To Yaddie Server"))
global.salt = settings.salt

app.use(
  session({
    secret: settings.cookieSecret,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection: global.db
    })
  })
)

app.use(tagRoutes, recipeRoutes)

app.listen(5000, () => console.log(`Yaddie Server is on port 5000`))
