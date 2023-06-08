import express from 'express';
import { User } from '../../db/models';
import { Medecine } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const cards = await Medecine.findAll();
  const initState = { cards };
  res.render('Layout', initState);
});

router.get('/account', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { id: 1 } });
    const initState = { userData };
    res.render('Layout', initState);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

export default router;
