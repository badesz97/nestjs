import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from 'src/infrastructure/database/schemas/cat.schema';
import { CatsService } from 'src/core/application-services/cat.service';
import { CatsController } from 'src/web/controllers/cat.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatModule {}
