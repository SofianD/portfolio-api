import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { LoginService } from '../service/login.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Controller('login')
export class LoginController {

    constructor(
        private readonly loginService: LoginService
    ) {}

    @Post()
    async login(
        @Body('data') data: any
    ) {
        // Check if admin exist
        const result = await this.loginService.login(data.email);
        if (result === null)  throw new HttpException('No account with this email', HttpStatus.NOT_FOUND);

        // Check if password match
        const isAuth = await bcrypt.compare(data.password, result.password);
        if (isAuth === false) throw new HttpException('Wrong password', HttpStatus.FORBIDDEN);

        // return JsonWebToken
        return {
            message: 'Authenticated',
            token: jwt.sign(
                {_id: result._id},
                '167CD6DC2E719C1CE671DBAEA8465'
            ),
            expiresIn: 3600
        };
    }
}
