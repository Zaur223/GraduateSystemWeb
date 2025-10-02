import { registerValidation } from '../validations/auth.js';
import express from 'express';
import mongoose from 'mongoose';

import * as UserController from './controllers/UserController.js'
import CheckAuth from '../utils/CheckAuth.js';


mongoose.connect('mongodb+srv://admin:zaur123@cluster0.kuh6z8i.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('DB ok')
}).catch(() => console.log('DB error', err))

const app = express();

app.use(express.json());

app.post('/auth/login', UserController.login)

app.post('/auth/register', registerValidation, UserController.register)

app.get('/auth/me', CheckAuth, UserController.getMe)

app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log('server ok')
})