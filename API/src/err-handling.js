console.log('process env',process.env.NODE_ENV);
const fs =require('fs/promises')


if(process.env.NODE_ENV === "production"){
    console.log('enable error handling')

    process.on('unhandledRejection',(err,promise)=>{
       errorlogger(`${err}:${promise}`)
    })
    process.on('uncaughtException',(error)=>{errorlogger(error)})
}

function errorlogger(data){
    return fs.appendFile(
        `logs/${new Date().toLocaleDateString()}.log`,
        `[${new Date().toLocaleTimeString()}]:${data}`
    )
    .then(()=>console.log('log created'))
    .catch((err)=>console.log('error creating log',err));
}

// error logging: development purposes
// request logging :analytics purpose(npm i morgan)