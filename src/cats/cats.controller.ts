import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';
import { Cat } from './schemas/cat.schema';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService){}

    @Post()
    create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
        return this.catsService.create(createCatDto);
    }
    
    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }
}
