import express from 'express';
import { Medecine } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const cards = await Medecine.findAll();
  const initState = { cards };
  res.render('Layout', initState);
});

export default router;
