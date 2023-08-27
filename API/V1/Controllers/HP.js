const nodemailer = require('nodemailer');
var randomstring = require("randomstring");


module.exports = {
    HomePage:(req,res)=>{
        res.render('index')
    },
    contactUs:(req,res)=>{
        const {contactName,contactEmail,contactPhone,contactMessage} = req.body;
        

        const i = randomstring.generate(8);
        let mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'asidoasif@gmail.com',
                pass: process.env.EMAIL_PASS
            }
        });
        let mailDetails = {
            from: 'asidoasif@gmail.com',
            to: 'orel232177@gmail.com',
            subject:`${i} :מתעניין חדש`,
            text:`Name:${contactName},
                   Email:${contactEmail},
                   Phone:${contactPhone}
                   TextArea:${contactMessage}`
        };
         
        mailTransporter.sendMail(mailDetails, function(err, data) {
            if(err) {
                console.log(err);
            } else {
                console.log('Email sent to'+" "+Email);
            }
        });

        return res.redirect('/');
    }
}