const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/form", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
   <h3>Contact Details</h3>
   <ul>
   <li>Name: ${req.body.name}</li>
   <li>Email: ${req.body.email}</li>
   <li>Subject: ${req.body.subject}</li>
   </ul>
   <h3>Message</h3>
   <p>${req.body.message}</p>
   `;

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "sandeshathreya1994@gmail.com",
        pass: "Germany@2018"
      }
    });

    let mailOptions = {
      from: "sandeshathreya1994@gmail.com",
      to: "ashwini.patil228@gmail.com",
      replyTo: "ashwini.patil228@gmail.com",
      subject: "new Message",
      text: req.body.message,
      html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }

      console.log("message sent: %s", info.message);
      console.log("message URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
