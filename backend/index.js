const express = require('express')
const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer')

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());


app.get('/', async (req, res) => {
    res.send("Welcome to Email Server")
});

app.post('/send-email', async (req, res) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.server.com',
        service: 'gmail',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        from: req.body.myEmail,
        to: req.body.email,
        subject: req.body.subject,
        text: req.body.message,
    };

    const sendEmail = (res) => {
        transporter.sendMail(mailOptions, (err, info) => {
            if(err)
                res.status(404).send(err);
            else
                res.status(200).send("Email sent: "+info.response)
        })
    }
    sendEmail(res);
})

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`)
})