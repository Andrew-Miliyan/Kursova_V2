import express, { urlencoded } from 'express'
import mongoose from 'mongoose'
import router from './Router.js';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import * as path from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DB_URL="mongodb+srv://andrymilanqwas20003:0vBiSmd4vD05zYK5@cluster0.xhrqk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"///  /milian
const PORT = 5000;

const app = express()

app.use(express.urlencoded({ extended: true }));
const viewsPath = path.join(__dirname, 'views');
app.set('views', viewsPath);
app.set('view engine', 'ejs');
app.use(express.json())
app.use('/api',router)

async function startApp (){
    try{
        await mongoose.connect(DB_URL)
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`)
        })
    }catch(e){
        console.log(e)
    }
}

startApp()

export default DB_URL
