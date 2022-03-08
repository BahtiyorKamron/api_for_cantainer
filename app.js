const express = require("express")
const app = express()
const Registrate = require("./routers/users")
const Category = require("./routers/category")
const Cantainer = require("./routers/cantainer")
const port = process.env.PORT || 9000

app.use( express.json() )
app.use( Registrate )
app.use( Category )
app.use( Cantainer )


app.listen(port,()=>{})
