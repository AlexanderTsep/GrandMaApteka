import express from 'express';

const router = express.Router();

router.get('/signup', (req, res) => {
  if (req.session.user) {
    return res.redirect('/');
  }
  res.render('Layout', {});
});

router.get('/signin', (req, res) => {
  if (req.session.user) {
    return res.redirect('/');
  }
  res.render('Layout', {});
});

export default router;
