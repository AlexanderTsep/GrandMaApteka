import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';

const apiAuthRouter = express.Router();

apiAuthRouter.post('/signup', async (req, res) => {
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) {
    res.status(400).json({ message: 'no user full data' });
  }
  const searchEmail = await userName.findOne({
    where: { email },
  });
  if (searchEmail) {
    res.status(400).json({ message: 'email exists' });
  }
  const hashPass = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    userName,
    email,
    password: hashPass,
  });
  req.session.user = { id: newUser.id, name: newUser.name, email: newUser.email };

  res.sendStatus(200);
});

apiAuthRouter.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  if (!email && !password) {
    return res.status(400).json({ message: 'no user full data' });
  }
  const currentUser = await User.findOne({
    where: { email },
  });
  if (!currentUser || (await bcrypt.compare(currentUser.password, password))) {
    return res.status(401).json({ message: 'email not exists' });
  }
  req.session.user = {
    id: currentUser.id,
    name: currentUser.name,
    email: currentUser.email,
  };

  res.sendStatus(200);
});

apiAuthRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sId');
  res.sendStatus(200);
});

export default apiAuthRouter;
