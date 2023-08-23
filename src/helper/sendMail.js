import nodemailer from "nodemailer";

export const sendMail = (emailTemplate) => {
  const { emailTo, subject, message } = emailTemplate;
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "eglespiritacademy@gmail.com",
      pass: "izygcbfqqmykmtwv",
    },
  });
  let mailOptions = {
    from: "eglespiritacademy@gmail.com",
    to: emailTo,
    subject,
    // text: "Congratulations you have successfully registered",
    html: message,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + mailOptions.to, info.response);
    }
  });
};

export default sendMail;
