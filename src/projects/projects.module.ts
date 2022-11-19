import { ProjectsService } from './projects.service';
import { PrismaModule } from './../prismaClient/prisma.module';
import { Module } from "@nestjs/common";
import { ProjectsController } from './projects.controller';

@Module({
    imports:[PrismaModule],
    providers:[ProjectsService],
    controllers:[ProjectsController]
})

export class ProjectsModule{}