import express from 'express';
import { User, Trash } from '../../db/models';

const router = express.Router();

router.patch('/user/:id', async (req, res) => {
  try {
    const { userName, secondName, sex, email } = req.body;
    await User.update({ userName, secondName, sex, email }, { where: { id: req.params.id } });
    const updatedPost = await User.findOne({ where: { id: req.params.id } });
    res.json(updatedPost);
  } catch (error) {
    console.log(error);
  }
});

router.post('/trash', async (req, res) => {
  try {
    const { medId } = req.body;
    if (!req.session.trash) {
      req.session.trash = [];
    }
    req.session.trash.push(medId);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

router.delete('/trash/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log('req.session.trash', req.session.trash);
    const delElem = req.session.trash.splice(id, 1);

    res.status(200).json(delElem);
  } catch (error) {
    console.log(error);
  }
});

export default router;
