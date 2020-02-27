import { Injectable, NestMiddleware } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CryptPwMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {

    const password = req.body.userData.password;
    bcrypt.hash(
      password,
      10,
      (err, hash)=>{
        err
        ?
        res.status(500).json({
          message: 'Password encryption failed',
          userData: req.body.userData
        })
        :
        crypt(hash)
        ;
        next();
      }
    );

    function crypt(hash) {
      req.body.userData.password = hash;
    }
  }
  
}
