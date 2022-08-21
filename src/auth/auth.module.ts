import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';

import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
@Module({
    controllers:[AuthController],
    // when we export User Module that didn't mean we import every thing just import exported Things
    imports:[UserModule,PassportModule,
        // for export JWT Module
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
          }),
        ],
       
    providers: [AuthService,LocalStrategy,JwtStrategy]
})
export class AuthModule {}
