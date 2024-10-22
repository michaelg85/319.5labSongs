//Imports
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from './db/conn.mjs';
import songRoutes from './routes/songRoutes.mjs'
import { songs } from './data/data.mjs'
import Song from './models/songSchema.mjs'

//Setup
dotenv.config();
const app = express();
let PORT = process.env.PORT || 3001;

//DB Connection
connectDB()

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

//Routes
app.use('/song', songRoutes)

//Seed database (linked to data.mjs)
//Must comment out before making public
app.get('/seed', async (req, res) => {
  // Create items in database
  await Song.create(songs)
  res.send('Seeding database')
});

//Listener
app.listen(PORT, () => {
  console.log(`Sever is running on PORT: ${PORT}`);
});
