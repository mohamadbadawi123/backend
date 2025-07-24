import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateProductTypeDto } from './dto/create-product-type.dto';
import { UpdateProductTypeDto } from './dto/update-product-type.dto';

@Injectable()
export class ProductTypeService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProductTypeDto) {
    return this.prisma.productType.create({ data });
  }

  async findAll() {
    return this.prisma.productType.findMany();
  }

  async findOne(id: number) {
    return this.prisma.productType.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateProductTypeDto) {
    return this.prisma.productType.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.productType.delete({ where: { id } });
  }

  async findByProductId(productId: number) {
    return this.prisma.productType.findMany({ where: { productId } });
  }
} 