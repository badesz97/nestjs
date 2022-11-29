import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from 'src/web/dto/create-cat.dto';
import {
  Cat,
  CatDocument,
} from '../../infrastructure/database/schemas/cat.schema';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cat.name) private readonly catModel: Model<CatDocument>,
  ) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = await this.catModel.create(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return await this.catModel.find().exec();
  }

  async findOne(id: string): Promise<Cat> {
    try {
      return await this.catModel.findOne({ _id: id }).exec();
    } catch (error) {
      throw new HttpException(
        `Object with the specified id (${id}) does not exist.`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async delete(id: string) {
    try {
      return await this.catModel.findByIdAndRemove({ _id: id }).exec();
    } catch (error) {
      throw new HttpException(
        `Object with the specified id (${id}) does not exist.`,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
