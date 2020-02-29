import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    
    const token = context.switchToHttp().getRequest().headers;
    return token === undefined ?
    false
    :
    jwt.verify(
      token,
      '167CD6DC2E719C1CE671DBAEA8465',
      (err, decoded) => {
        if(err) return false;
        return true;
      }
    );
  }
}
