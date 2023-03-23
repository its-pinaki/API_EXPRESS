// by destructuring getting Schema from mongoose
const {Schema,model} = require('mongoose');
// created object for Schema by SChema(schema object,additional configuration)
const EmpSchema = new Schema({
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
},
{timestamp:true}
)

// call model function with argument name and schema
const Employee = model('employee',EmpSchema)

// exporting Employee model now
module.exports = Employee