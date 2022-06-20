/* eslint-disable import/extensions */
import express from 'express';
import passport from 'passport';

import { signUp, signIn } from './controllers/user';

const router = express.Router();

router.post('/sign-in', async (req, res) => signIn(req, res));
router.post('/sign-up', async (req, res) => signUp(req, res));

router.get('/home', passport.authenticate('jwt', { session: false }), async (req, res) => res.json({authenticated: true}));

export default router;
