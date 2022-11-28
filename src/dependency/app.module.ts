import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatModule } from './cat.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:Passw0rd@cluster.3xaqrhv.mongodb.net/test',
    ),
    CatModule,
  ],
})
export class AppModule {}
