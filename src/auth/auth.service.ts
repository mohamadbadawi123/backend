import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminService } from '../admin/admin.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private adminService: AdminService,
    private jwtService: JwtService,
  ) {}

  async validateAdmin(username: string, password: string) {
    const admin = await this.adminService.findByUsername(username);
    if (admin && await bcrypt.compare(password, admin.password)) {
      return admin;
    }
    return null;
  }

  async login(admin: any) {
    const payload = { username: admin.username, sub: admin.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
} 