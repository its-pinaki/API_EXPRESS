const Employee = require('../models/employee-models')
// create data or inserting
const create=(data)=>{
   const emp = new Employee(data);
   return emp.save()
}
const getAll=()=>{}
const getById=(id)=>{}
const updateById=(id,data)=>{}
const removeById=(id)=>{}

module.exports={
    create,getAll,getById,updateById,removeById
}