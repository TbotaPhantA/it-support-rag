import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller.js';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service.js';
import { AuthRepository } from './auth.repository.js';
import { config } from '../shared/infra/config/config.js';

@Module({
  imports: [JwtModule.register({ secret: config.auth.jwtSecret })],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository],
})
export class AuthModule {}
