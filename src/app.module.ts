import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [CategoriesModule, ProjectsModule],
})
export class AppModule {}
