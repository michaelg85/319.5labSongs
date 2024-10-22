//Import
import express from "express";
import Song from '../models/songSchema.mjs'
const router = express.Router();

//Test Route
// router.get("/", (req, res) => {
//   res.send("Testing!!");
// });

//Create
router.post('/', async (req, res)=>{
    try {
        const newSong = new Song(req.body);

        await newSong.save()

        res.json(newSong);

    } catch (err) {
        console.error(err)
        res.status(500).json({msg: "Server Error"})
    }
})

//Read
router.get('/', async (req, res)=>{
    try {
        const allSongs = await Song.find({})

        res.json(allSongs)

    } catch (err) {
        console.error(err)
        res.status(500).json({msg: "Server Error"})
    }
})

//Update
router.put('/:id', async (req, res)=>{
    try {
        let updatedSong = await Song.findByIdAndUpdate(req.params.id, req.body, {new: true})
        
        res.json(updatedSong)

    } catch (err) {
        console.error(err)
        res.status(500).json({msg: "Server Error"})
    }
})

//Delete
router.delete('/:id', async (req, res)=>{
    try {
        let deletedSong = await Song.findByIdAndDelete(req.params.id);
        
        res.json(deletedSong);
    } catch (err) {
        console.error(err)
        res.status(500).json({msg: "Server Error"})
    }
})


//Export
export default router;
