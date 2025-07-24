import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ActivitiesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateActivityDto) {
    const data = { ...dto };
    if (typeof data.month === 'number') {
      data.month = String(data.month);
    }
    return this.prisma.activity.create({ data });
  }

  async findAll() {
    return this.prisma.activity.findMany({ orderBy: { id: 'desc' } });
  }

  async findOne(id: number) {
    const activity = await this.prisma.activity.findUnique({ where: { id } });
    if (!activity) throw new NotFoundException('Activity not found');
    return activity;
  }

  async update(id: number, dto: UpdateActivityDto) {
    await this.findOne(id); // will throw if not found
    const data = { ...dto };
    if (typeof data.month === 'number') {
      data.month = String(data.month);
    }
    return this.prisma.activity.update({ where: { id }, data });
  }

  async remove(id: number) {
    await this.findOne(id); // will throw if not found
    return this.prisma.activity.delete({ where: { id } });
  }
} 