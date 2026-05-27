import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { BacteriaService } from './bacteria.service';
import { BacteriaDto } from './dto/bacteria.dto';

@Controller('bacteria')
export class BacteriaController {
  constructor(private bacteriaService: BacteriaService) {}

  @Get()
  async findAll() {
    return await this.bacteriaService.findAll();
  }

  @Get('search')
  async search(@Query('name') name: string) {
    return await this.bacteriaService.search(name);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.bacteriaService.findOne(Number(id));
  }

  @Post()
  async create(@Body() data: BacteriaDto) {
    return await this.bacteriaService.create(data);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: BacteriaDto) {
    return await this.bacteriaService.update(Number(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.bacteriaService.delete(Number(id));
  }
}
