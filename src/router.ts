/* eslint-disable import/extensions */
import express from 'express';

import { signUp, signIn } from './controllers/user';

const router = express.Router();

router.post('/sign-in', async (req, res) => signIn(req, res));
router.post('/sign-up', async (req, res) => signUp(req, res));

export default router;
