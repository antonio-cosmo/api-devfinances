import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { PrismaService } from './prismaClient/prisma.service';

@Module({
  imports: [CategoriesModule],
})
export class AppModule {}
