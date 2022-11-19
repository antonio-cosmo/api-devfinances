import { PrismaService } from '../prismaClient/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService){}
  async create(createCategoryDto: CreateCategoryDto) {
    const {name} = createCategoryDto;

    await this.prisma.category.create({
      data:{
        name
      }
    });

  }

  async findAll() {
    const listCategories = await this.prisma.category.findMany();
    return listCategories;
  }

  async findOne(id: string) {

    const category = await this.prisma.category.findUnique({
      where:{
        id
      }
    })
    return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    await this.prisma.category.update({
      where:{
        id
      },
      data:{
        ...updateCategoryDto
      }
    })
  }

  async remove(id: string) {
    await this.prisma.category.delete({
      where:{
        id
      },
    })
  }
}
