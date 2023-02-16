const db = require('../model/dbTaskManagement');


function validation(id, judul, description, isDone){
    if (isNaN(id)) {return 'id not a number'}
    
    if (judul == undefined) {return 'judul not complete'}
    if (description == undefined) {return 'description not complete'}
    if (isDone == undefined) {return 'isDone not complete'}

    if (isDone != true && isDone != false) {return 'isDone is not boolean'}
}

//get list of products
const getAllTask = (req, res) => {
    db.query("SELECT * FROM task", (err, result) => {
        if(err) throw err;
        res.status(200).json(result)
    })
}

//get list of products by id
const getTaskByID = (req, res) => {
    const id = req.params.id
    validator = validation(id)
    if (validator == 'id not a number') {
        return res.status(400).json({message: 'id must be a number'})}
    const sqlQuery = "SELECT * FROM task WHERE id = ?";
    db.query(sqlQuery, id, (err, result) => {
        if(err) throw err;
        res.status(200).json(result)
    })    
}

//add product
const addTask = (req, res) => {
    const {judul, description} = req.body;
    let validator = validation(judul, description)
    if (validator == 'judul not complete'){
        return res.status(400).json({message: 'judul is missing'})}
    if (validator == 'description not complete'){
        return res.status(400).json({message: 'description is missing'})}
    const sqlQuery = "INSERT INTO task (judul, description) VALUES (?, ?)";
    db.query(sqlQuery, [judul, description], (err, result) => {
        if(err) throw err;
        res.status(200).json({message: 'Task added successfully'})
    })
}

//delete product
const deleteTaskByID = (req, res) => {
    const id = req.params.id
    validator = validation(id)
    if (validator == 'id not a number') {
        return res.status(400).json({message: 'id must be a number'})}
    const sqlQuery = "DELETE FROM task WHERE id = ?";
    db.query(sqlQuery, id, (err, result) => {
        if(err) throw err;
        res.status(200).json({message: `Task with id ${id} has been deleted`})
    })
    
}

//update product
const updateTask = (req, res) => {
    const id = req.params.id
    const {judul, description, isDone} = req.body;
    let validator = validation(id, judul, description, isDone)

    if (validator == 'id not a number') {
        return res.status(400).json({message: 'id must be a number'})}
    if (validator == 'judul not complete'){
        return res.status(400).json({message: 'judul is missing'})}
    if (validator == 'description not complete'){
        return res.status(400).json({message: 'description is missing'})}
    if (validator == 'isDone not complete'){
        return res.status(400).json({message: 'isDone is missing'})}
    if (validator == 'isDone is not boolean'){
        return res.status(400).json({message: 'isDone must be true or false'})}   
   
    const sqlQuery = `UPDATE task SET judul = ?, description = ?, is_done = ? WHERE id = ?` 
    db.query(sqlQuery, [judul, description, isDone, id], (err, result)=>{
        if(err) throw err;
        res.status(200).json({message: `Task with id ${id} has been updated`})
    })

}



module.exports = {getAllTask, getTaskByID, addTask, deleteTaskByID, updateTask}