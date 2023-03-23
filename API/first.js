// SOAP -> structured object access protocol(only used by web).
// REST -> representational state transfer(used for mobile,web,desktop app)-through the url(http).
// reading:GET
// posting:POST
// Update:PUT,PATCH
// delete:DELETE

// express pattern-----------------------------------------
// 1.require statemenet
const express = require('express');
const bodyParser = require('body-parser')

// yargs
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers');
const { command } = require('yargs');
const argv = yargs(hideBin(process.argv)).argv
const app = express()
const port_Number = argv.port || 3000

// command for configurable command ->  node first.js --port=4000 : 4000

// 2.application behaviour
// parse application/x-www-form-urlencoded
// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/app/:id?', (req, res) => {
    // if u use ':' give value is mandatory,if u use like ':id?' then this is not mandatory
    // return res.status(200).json({id:req.params.id,name:'pinaki'});
    // return res.json(req.params)
    return res.json(req.query)
})
app.post('/testpost/',urlencodedParser, (req, res) => {
    res.send(req.body)
})

// status:200->success
// 400-> failure
// 500-> server side issues
// client=>request=>server=>process=>response
// every request/reponse contains headers,body

// 3. server setup
app.listen(port_Number, (err) => {
    if (err) {
        console.log(err);
        console.log('failed to process')
        return process.exit(1)
    }
    console.log(`server running at 'http://localhost:${port_Number}'`)
})