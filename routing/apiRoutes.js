const nodemailer = require('nodemailer');
require('dotenv').config();

module.exports = function(app) {

    app.post("/email", (req, res)=> {

        console.log(req.body);

        const mailOptions = {
            from: req.body.email, 
            to: process.env.EMAIL, 
            subject: req.body.subject,
            text: req.body.message + "\n \n From: " + req.body.name + " With: " + req.body.email
        };
    
        var transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
              user: process.env.EMAIL,
              pass: process.env.PASSWORD
            }
        });

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
        });
       
    })

};