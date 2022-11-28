import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateCatDto } from 'src/web/api/dto/create-cat.dto';
import { Cat } from 'src/infrastructure/database/schemas/cat.schema';
import { CatsService } from 'src/core/application-services/cat.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Cat> {
    return this.catsService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.catsService.delete(id);
  }
}
