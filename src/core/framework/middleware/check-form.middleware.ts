import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CheckFormMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const framework = req.body.framework;
    
    this.checkBodyValue(framework).length === 0
    ?
    next()
    :
    res.status(401).json({
      message: 'Failed request',
      error: this.checkBodyValue(framework)
    })
  }

  checkBodyValue(fw: any) {
    let errors: string[] = [];
    if (!fw.name) errors.push('Required a valid name');
    return errors;
  }
}
