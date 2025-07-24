import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async create(username: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.prisma.admin.create({
      data: { username, password: hashedPassword },
    });
  }

  async findAll() {
    return this.prisma.admin.findMany();
  }

  async findOne(id: number) {
    return this.prisma.admin.findUnique({ where: { id } });
  }

  async findByUsername(username: string) {
    return this.prisma.admin.findUnique({ where: { username } });
  }

  async update(id: number, data: any) {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    return this.prisma.admin.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.admin.delete({ where: { id } });
  }
} 