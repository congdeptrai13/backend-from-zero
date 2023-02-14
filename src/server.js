require('dotenv').config()
const express = require('express') //commonjs
const configViewEngine = require("./config/viewEngine")
const webRoutes = require("./routes/web")
const connection = require("./config/database")

const app = express()// app express
const port = process.env.PORT || 8888; //port => hardcode
const hostname = process.env.HOST_NAME;


//config template engine
configViewEngine(app);

//config req.body
app.use(express.json()); //for json
app.use(express.urlencoded({ extended: true })) //for form data

//khai báo route
app.use("/", webRoutes)

//test connection



// connection.query(
//   'select * from Users u',
//   function (err, results, fields) {
//     console.log("check results=", results); // results contains rows returned by server
//   }
// );

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})