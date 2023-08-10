import express from "express";

const Vigenere = require('caesar-salad').Vigenere;

const ciphersRouter = express.Router();

ciphersRouter.post('/encode', async (req, res) => {
    const{body} = req;

    res.send({
        encoded: Vigenere.Cipher(body.password).crypt(body.message)
    });
});

ciphersRouter.post('/decode', async (req, res) => {
    const{body} = req;

    res.send({
        decoded: Vigenere.Decipher(body.password).crypt(body.message)
    });
});

export default ciphersRouter;
