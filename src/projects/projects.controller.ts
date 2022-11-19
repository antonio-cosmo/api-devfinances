import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { CreateProjectDTO } from "./dto/create-project.dto";
import { UpdateProjectDTO } from "./dto/update-project.dto";
import { ProjectsService } from "./projects.service";

@Controller('projects')
export class ProjectsController{
    constructor(private readonly projectsService: ProjectsService){}

    @Post()
    async create(@Body() createProjectDTO: CreateProjectDTO,  @Res() res: Response){
        await this.projectsService.create(createProjectDTO);
        return res.status(201).json({message: 'Projeto criada'});
        
    }

    @Get()
    async findAll(@Res() res: Response){
        const listProjects = await this.projectsService.findAll();
        return res.status(200).json(listProjects);
    }

    @Get(':id')
    async findOne(@Param('id') id: string, @Res() res: Response){
        const project = await this.projectsService.findOne(id);
        return res.status(200).json(project);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateProjectDTO: UpdateProjectDTO, @Res() res: Response){
        await this.projectsService.update(id, updateProjectDTO);
        return res.status(200).json({message: 'Projeto atualizado'});

    }

    @Delete(':id')
    async delete(@Param('id') id: string, @Res() res: Response){
        await this.projectsService.delete(id);
        return res.status(200).json({message: 'Projeto deletado'})

    }
}