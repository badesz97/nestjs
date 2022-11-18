import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController } from 'src/api/controllers/cat.controller';
import { Cat, CatSchema } from 'src/domain/schemas/cat.schema';
import { CatsService } from 'src/domain/services/cat.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatModule {}
