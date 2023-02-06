const express = require('express');
const classiqueMeuble = require('../models/classiqueMeuble');
const router = express.Router();

//Post Method
router.post('/post', async (req, res) => {
    const data = new classiqueMeuble({
        name: req.body.name,
        description: req.body.description,
        imgUrl: req.body.imgUrl
    })
    try {
        await data.save();
        res.status(200).json(data)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAll', (req, res) => {
    res.send('Get All API')
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

module.exports = router;