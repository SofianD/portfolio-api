import { Module } from '@nestjs/common';
import { RegisterModule } from './core/register/register.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginModule } from './core/login/login.module';


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
    LoginModule
  ]
})
export class AppModule {}
