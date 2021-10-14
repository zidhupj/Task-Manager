const Task = require('../models/Task')

// Difine all controller functions

// Controller to get all tasks
// method: get
// route : /api/v1/tasks/
const getAllTasks = async(req,res) => {
    const tasks = await Task.find({})
    res.status(200).json({tasks})
}

// Controller to create task
// method: post
// route : /api/v1/tasks/
const createTask = async(req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
}

// Controller to get single task
// method: get
// route : /api/v1/tasks/:id
const getTask = async(req, res) => {
    try {
        const {id} = req.params
        const task = await Task.findOne({ _id: id })
        if (!task) {
            throw new Error(`No task with id : ${id}`)
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(404).send(error.message)
    }
}

// Controller to update task
// method: patch
// route : /api/v1/tasks/:id
const updateTask = async (req, res) => {
    try {
       const { id } = req.params
    
        const task = await Task.findByIdAndUpdate(id, req.body)
        if (!task) {
            throw new Error(`No task with id : ${id}`)
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(404).send(error.message)
    }
}

// Controller to delete task
// method: delete
// route : /api/v1/tasks/:id
const deleteTask = async(req, res) => {
    try {
       const { id } = req.params
    
        const task = await Task.findByIdAndDelete(id, req.body)
        if (!task) {
            throw new Error(`No task with id : ${id}`)
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports = {
    getAllTasks, createTask, updateTask, getTask, deleteTask
}