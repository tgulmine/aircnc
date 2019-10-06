/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';

// index, show, store, update, destroy

import User from '../models/User';

export default {
  async store(req: Request, res: Response): any {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  },
};
