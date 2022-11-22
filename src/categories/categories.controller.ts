import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto, @Res() res: Response) {
    await this.categoriesService.create(createCategoryDto);
    return res.status(201).json({message: 'Categoria criada'})
  }

  @Get()
  async findAll(@Res() res: Response) {
    const listCategories = await this.categoriesService.findAll()
    return res.status(200).json(listCategories);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const category = await this.categoriesService.findOne(id);

    return res.status(200).json(category)
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto, @Res() res: Response) {
    await this.categoriesService.update(id, updateCategoryDto);

    return res.status(200).send({message: 'Categoria atualizada'})
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    await this.categoriesService.remove(id);

    return res.status(200).json({message:'Categoria deletada'})
  }
}
