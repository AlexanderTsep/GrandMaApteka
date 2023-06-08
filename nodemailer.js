import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host:
    port:
    secure: false;
    auth: {
        user:
        pass:
    }
})