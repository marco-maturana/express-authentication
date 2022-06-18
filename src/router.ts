/* eslint-disable import/extensions */
import express from 'express';

import { signUp } from './controllers/user';

const router = express.Router();

router.post('/sign-up', async (req, res) => signUp(req, res));

export default router;
