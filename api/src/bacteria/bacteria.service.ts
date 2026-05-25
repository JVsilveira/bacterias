import { Injectable } from '@nestjs/common';

import { PrismaService } from './database/prisma.service';
import { BacteriaDto } from './dto/bacteria.dto';

@Injectable()
export class BacteriaService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.bacteria.findMany();
  }

  async create(data: BacteriaDto) {
    return await this.prisma.bacteria.create({ data });
  }

  async findOne(id: number) {
    return await this.prisma.bacteria.findUnique({ where: { id } });
  }

  async update(id: number, data: BacteriaDto) {
    return await this.prisma.bacteria.update({ where: { id }, data });
  }

  async delete(id: number) {
    return await this.prisma.bacteria.delete({ where: { id } });
  }
}
