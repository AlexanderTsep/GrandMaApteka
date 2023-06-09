import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';
import sendResponse from '../../mailer/nodemailer';

const apiAuthRouter = express.Router();

apiAuthRouter.post('/signup', async (req, res) => {
  try {
    const { userName, secondName, sex, email, password } = req.body;
    if (!userName || !secondName || !sex || !email || !password) {
      res.sendStatus(400).json({ message: 'no user full data' });
    }
    const searchEmail = await User.findOne({
      where: { email },
    });
    if (searchEmail) {
      res.sendStatus(400).json({ message: 'email exists' });
    }
    const hashPass = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      userName,
      secondName,
      sex,
      email,
      password: hashPass,
    });
    req.session.user = { id: newUser.id, name: newUser.userName, email: newUser.email };

    await sendResponse(req.body);

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

apiAuthRouter.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email && !password) {
      return res.status(400).json({ message: 'no user full data' });
    }
    const currentUser = await User.findOne({
      where: { email },
    });
    if (!currentUser || (await bcrypt.compare(currentUser.password, password))) {
      return res.status(401).json({ alert('Email не зарегистрирован') });
    }
    req.session.user = {
      id: currentUser.id,
      name: currentUser.name,
      email: currentUser.email,
    };

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

apiAuthRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.sendStatus(200);
});

export default apiAuthRouter;
