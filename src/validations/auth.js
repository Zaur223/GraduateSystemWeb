import { body } from 'express-validator';

export const loginValidation = [
    body('email', 'Email doğru değil').isEmail(),
    body('password', 'Şifre en az 5 symbol olmalı').isLength({min: 5})
]

export const registerValidation = [
    body('email', 'Email doğru değil').isEmail(),
    body('password', 'Şifre en az 5 symbol olmalı').isLength({ min: 5 }),
    body('fullName', 'Lütfen isminizi yazınız').isLength({ min: 3 }),
    body('avatarUrl', 'avatar linki yanliştır').optional().isURL(),
]