import { registerValidation } from '../validations/auth.js';
import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';


mongoose.connect('mongodb+srv://admin:zaur123@cluster0.kuh6z8i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('DB ok')
}).catch(() => console.log('DB error', err))

const app = express();

app.use(express.json());


app.post('/auth/register', registerValidation, (req, res) => {
    
})

app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log('server ok')
})