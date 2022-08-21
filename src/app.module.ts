import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjs',
      entities: [User], // to make entity in DB
      synchronize: true, /**
      Setting synchronize: true shouldn't be used in production - otherwise you can lose production data. */
    }),
    UserModule,
    AuthModule,
    ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
