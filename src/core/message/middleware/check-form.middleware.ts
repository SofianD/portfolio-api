import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CheckFormMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const messageData = req.body.messageData;
    
    this.checkBodyValue(messageData).length === 0
    ?
    next()
    :
    res.status(401).json({
      message: 'BAD REQUEST',
      error: this.checkBodyValue(messageData)
    });
  }

  checkBodyValue(message: any) {
    let errors: string[] = [];
    
    // Replace this by mongoose schema validation
    if (
      !message.content || message.content.length > 10
    ) errors.push('Required a valid content');
    if (
      !message.subject || message.subject.length > 8
    ) errors.push('Required a valid project subject');
    if (
      !message.phone_number || message.phone_number && message.phone_number.length !== 9
    ) errors.push('Required a valid phone number');
    if (
      !message.email || message.email.split('@').length !== 2
    ) errors.push('Required a valid email');
    if (
      !message.sender || message.sender.length < 6
    ) errors.push('Required your name');

    return errors;
  }
}
