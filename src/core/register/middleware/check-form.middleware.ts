import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CheckFormMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {

    const userData = req.body.userData;
    
    this.checkBodyValue(userData).length === 0
    ?
    next()
    :
    res.status(401).json({
      message: 'Failed request',
      error: this.checkBodyValue(userData)
    });
  }

  checkBodyValue(userData: any) {
    let errors: string[] = [];
    if (!userData.email || userData.email.split('@').length !== 2 || userData.email.length < 6) errors.push('Required a valid email');
    if (!userData.password || userData.password.length < 6) errors.push('Required a valid password');
    return errors;
  }

}
