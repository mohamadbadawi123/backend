import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { ProductTypeService } from './product-type.service';
import { CreateProductTypeDto } from './dto/create-product-type.dto';
import { UpdateProductTypeDto } from './dto/update-product-type.dto';

@Controller('product-type')
export class ProductTypeController {
  constructor(private readonly productTypeService: ProductTypeService) {}

  @Post()
  create(@Body() createProductTypeDto: CreateProductTypeDto) {
    return this.productTypeService.create(createProductTypeDto);
  }

  @Get()
  findAll() {
    return this.productTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productTypeService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductTypeDto: UpdateProductTypeDto) {
    return this.productTypeService.update(Number(id), updateProductTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productTypeService.remove(Number(id));
  }

  @Get('by-product/:productId')
  findByProductId(@Param('productId') productId: string) {
    return this.productTypeService.findByProductId(Number(productId));
  }
} 