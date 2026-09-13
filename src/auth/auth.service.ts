import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository.js';
import { LoginDto } from './dto/login.dto.js';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private repo: AuthRepository,
    private jwtService: JwtService,
  ) {}

  me() {
    // TODO: simply retrieve already decoded user from cls and return it
  }

  login(dto: LoginDto) {
    /**
     * TODO:
     * 1. try to find user by email
     * 2. hash the password
     * 3. compare password hashes
     * 4. encode user into access token
     * 5. return response dto
     */
  }
}
