import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    console.log('Creating product with data:', createProductDto);
    
    // التأكد من أن البيانات موجودة
    if (!createProductDto || !createProductDto.title || !createProductDto.image) {
      throw new Error('Title and image are required');
    }

    return this.prisma.product.create({
      data: {
        title: createProductDto.title,
        image: createProductDto.image,
        link: createProductDto.link || null,
      },
    });
  }

  async findAll() {
    return this.prisma.product.findMany();
  }

  async findOne(id: number) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({ 
      where: { id }, 
      data: updateProductDto 
    });
  }

  async remove(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }
} 