/* eslint-disable import/extensions */
import express from 'express';

import { findAll } from './controllers/user';

const router = express.Router();

router.get('/users', async (req, res) => findAll(req, res));

export default router;
