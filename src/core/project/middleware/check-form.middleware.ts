import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CheckFormMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const project = req.body.projectData;
    
    this.checkBodyValue(project).length === 0
    ?
    next()
    :
    res.status(401).json({
      message: 'BAD REQUEST',
      error: this.checkBodyValue(project)
    });
  }

  checkBodyValue(project: any) {
    let errors: string[] = [];
    
    // Replace this by mongoose schema validation
    if (
      !project.name || project.name > 5
    ) errors.push('Required a valid project name');
    if (
      !project.description || project.description > 5
    ) errors.push('Required a valid project description');
    if (
      !project.created_date
    ) errors.push('Required a valid creation date');
    if (
      !project.images || project.images.length > 10
    ) errors.push('10 images per project max');
    if (
      !project.skills
    ) errors.push('unknow error with skills');
    if (
      !project.framework
    ) errors.push('unknow error with framework(s)');
    if (
      !project.platform
    ) errors.push('unknow error with platform(s)');

    return errors;
  }
}
