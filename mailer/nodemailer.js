const nodemailer = require('nodemailer');

const sendResponse = (req) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'bdel991@yandex.ru',
      pass: 'Balonka1!',
    },
  });
  transporter.sendMail(
    {
      from: 'bdel991@yandex.ru',
      to: req.email,
      subject: 'Социальная аптека',
      text: 'Регистрация прошла успешно.',
    },
    (err, info) => {
      if (err) console.log('=====>err', err);
      console.log('Email sent: ', info);
    },
  );
};

module.exports = sendResponse;
