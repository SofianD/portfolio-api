import { Module } from '@nestjs/common';
import { RegisterModule } from './core/register/register.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginModule } from './core/login/login.module';
import { ProjectModule } from './core/project/project.module';
import { FrameworkModule } from './core/framework/framework.module';
import { MessageModule } from './core/message/message.module';
import { SkillModule } from './core/skill/skill.module';


@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://user:5bLXgHFheEOQrowe@cluster0-ohnuj.mongodb.net/test?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    ),
    RegisterModule,
    LoginModule,
    ProjectModule,
    FrameworkModule,
    MessageModule,
    SkillModule
  ]
})
export class AppModule {}
