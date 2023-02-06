const express = require('express');
const Meuble = require('../models/Meuble');
const router = express.Router();

//Post Meubles Method
router.post('/postMeuble', async (req, res) => {
    const data = new Meuble({
        name: req.body.name,
        type: req.body.type,
        inspiration: req.body.inspiration,
        description: req.body.description,
        imgUrl: req.body.imgUrl
        //...req.body (tous les éléments de la requête seront copiés)
    })
    try {
        await data.save();
        res.status(200).json(data)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Meubles Method
router.get('/getAllMeubles', async (req, res) => {
    try{
        const data = await Meuble.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOneMeuble/:id', async (req, res) => {
    try{
        const data = await Meuble.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/updateMeuble/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Meuble.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/deleteMeuble/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Meuble.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;