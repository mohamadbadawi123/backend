import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { ProductModule } from './product/product.module';
import { ProductTypeModule } from './product-type/product-type.module';
import { UploadModule } from './upload/upload.module';
import { ActivitiesModule } from './activities/activities.module';

@Module({
  imports: [AuthModule, AdminModule, ProductModule, ProductTypeModule, UploadModule, ActivitiesModule],
})
export class AppModule {}
