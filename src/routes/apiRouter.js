import express from 'express';
import { User } from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

router.patch('/user/:id', async (req, res) => {
  try {
    const { userName, secondName, sex } = req.body;
    await User.update({ userName, secondName, sex }, { where: { id: req.params.id } });
    const updatedPost = await User.findOne({ where: { id: req.params.id } });
    res.json(updatedPost);
  } catch (error) {
    console.log(error);
  }
});

export default router;
