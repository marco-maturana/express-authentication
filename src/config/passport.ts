import passport, { PassportStatic } from 'passport';
import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import UserModel from '../models/user';

export default function passportConfig (): PassportStatic {
  const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
    issuer: process.env.JWT_ISSUER,
    audience: process.env.JWT_AUDIENCE
  };

  passport.use(new Strategy(opts, async function (payload, done) {
    try {
      const user = await UserModel.findById(payload.sub).lean();

      if (user == null) return done({ error: 'Usuário não encontrado!' }, false);

      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  }));

  return passport;
}
