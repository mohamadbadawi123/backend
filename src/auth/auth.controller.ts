import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminService } from '../admin/admin.service';
import { CreateAdminDto } from '../admin/dto/create-admin.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly adminService: AdminService,
  ) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const admin = await this.authService.validateAdmin(body.username, body.password);
    if (!admin) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(admin);
  }

  @Post('register')
  async register(@Body() createAdminDto: CreateAdminDto) {
    // تحقق إذا كان اسم المستخدم موجود مسبقًا
    const existing = await this.adminService.findByUsername(createAdminDto.username);
    if (existing) {
      throw new UnauthorizedException('Username already exists');
    }
    const admin = await this.adminService.create(createAdminDto.username, createAdminDto.password);
    return { message: 'Admin registered successfully', admin: { id: admin.id, username: admin.username } };
  }
} 