require('./err-handling')
const helmet = require('helmet')
const express = require('express');
const bodyParser = require('body-parser')
// yargs
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers');
const { command } = require('yargs');
const argv = yargs(hideBin(process.argv)).argv
const app = express()
app.use(helmet())
const port_Number = argv.port || 3000
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())



app.listen(port_Number,(err)=>{
    if(err){
      console.log(err)
    }
    console.log(`website running at 'http://localhost:${port_Number}'`)
})

// for adding database to website we need some client(mongoclient)
