import { PrismaService } from '../prismaClient/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService{
    constructor(private prisma: PrismaService){}
    async create(createProjectDTO: CreateProjectDto){
        const {name, cost, budget, categoryId} = createProjectDTO;
        await this.prisma.project.create({
            data:{
                name,
                cost,
                budget,
                categoryId
            }
        });
    }

    async findAll(){
        const listProjects = await this.prisma.project.findMany();
        return listProjects;
    }

    async findOne(id: string){
        const project = await this.prisma.project.findUnique({
            where:{
                id
            }
        });

        return project;
    }

    async update(id:string, updateProjectDTO: UpdateProjectDto){
        await this.prisma.project.update({
            where:{
                id
            },
            data:{
                ...updateProjectDTO
            }
        })

    }

    async delete(id: string){
        await this.prisma.project.delete({
            where:{
                id
            }
        })
    }
}