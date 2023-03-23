require('dotenv').config();
require('./err-handling')
const connect = require('./mongodb/index')
const helmet = require('helmet')
const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan')
const employeeRoute = require('./routes/employee-routes')
// yargs
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv
const app = express()


app.use(helmet())
const port_Number = argv.port || 3000
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(morgan('dev'))
// routes
app.use('/employee',employeeRoute)

app.listen(port_Number,(err)=>{
    if(err){
      console.log(err)
    }
    console.log(`website running at 'http://localhost:${port_Number}'`)
    connect();
})