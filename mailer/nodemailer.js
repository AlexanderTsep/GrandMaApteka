const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport(
  {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'cahek5610@gmail.com',
      pass: 'eisWRxqd01',
    },
  },
  {
    from: 'Mailer test <cahek5610@gmail.com',
  },
);

// const mailer = (message) => {
//   transport.sendMail(message, (err, info) => {
//     if (err) return console.log(err);
//     console.log('Письмо отправлено: ', info);
//   });

module.exports = transport;
