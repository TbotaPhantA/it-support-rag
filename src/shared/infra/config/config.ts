import { ensureTruthy } from '../../utils/ensures/ensureTruthy.js';
import { ensureNumber } from '../../utils/ensures/ensureNumber.js';

class Config {
  port = ensureNumber(Number(process.env.PORT))
  auth = {
    jwtSecret: ensureTruthy(process.env.JWT_SECRET)
  }
}

export const config = new Config()
