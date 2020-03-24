const express = require('express')
const router = new express.Router()
const Task = require('../models/task')
const auth = require('../middleware/auth')

router.post ('/tasks', auth, async (req, res) => {
    //    const task = new Task (req.body)

    const task = new Task ({
        ...req.body,
        owner: req.user._id
    })

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e){
        res.status(400).send()
    }
    
})

router.get ('/tasks', auth, async (req, res) => {

    try {
        const task = await Task.find( { owner: req.user._id} )
        // await req.user.populate('tasks').execPopulate()
        //res.send(req.user.tasks)
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
 
})

router.get ('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id ;

    try {
        //const task = await Task.find( {_id})
        
        const task = await Task.findOne({  _id, owner: req.user._id })

        if (!task){
            return res.status(404).send()
        }
        res.status(201).send(task)
    } catch (e) {
        res.status(500).send(e)
    }
 
})

router.patch ('/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['completed', 'description']
    const isValidator = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidator){
        return res.status(404).send({Error : 'This is An Error'})
    }
    try {
        
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id})
        
        //const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new : true , runValidators: true})
        if (!task){
            res.status(400).send()
        }

        updates.forEach( (update) => {
            task[update] = req.body[update]
        })
        await task.save()
        res.send(task)
    } catch (e){
        res.status(400).send(e)
    }
})

router.delete ('/tasks/:id', auth, async (req, res) => {
    //const task = await Task.findByIdAndDelete(req.params.id)
    const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id})
    try {
        if (!task){
            res.status(400).send()
        }
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})


module.exports = router 