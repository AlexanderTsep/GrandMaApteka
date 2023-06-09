import express from 'express';
import { User } from '../../db/models';
import { Medecine } from '../../db/models';
import { Trash } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const cards = await Medecine.findAll();
  const initState = { cards };
  res.render('Layout', initState);
});

router.get('/account', async (req, res) => {
  try {
    const id = req.session.user.id;
    const userData = await User.findOne({ where: { id } });
    const initState = { userData };
    res.render('Layout', initState);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/cart', async (req, res) => {
  try {
    if (req.session.trash) {
      const trashData = await Medecine.findAll({ where: { id: req.session.trash } });
      console.log('-------', trashData);
      const initState = { trashData };
      res.render('Layout', initState);
    } else {
      const initState = { message: 'Корзина пуста' };
      res.render('Layout', initState);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

export default router;
