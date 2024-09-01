const express = require('express');
const router = express.Router();
const transporter = require('../controler/email')

router.post('/contatos', async (req, res) => {
    const { to, subject, message } = req.body;
    if (!to || !subject ||message){
        return res.status(400).json({message: 'Erro ao enviar o e-mail.'})
    }
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: to,
            subject: subject,
            text: message
        });
        res.status(200).json({message: "E-mail enviado com sucesso!"})
    } catch (error) {
        res.status(500).send('Erro ao enviar o e-mail.');
    }
});

module.exports = router