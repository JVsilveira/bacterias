import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { Prisma } from '@prisma/client';

import { PrismaService } from './database/prisma.service';

import { BacteriaDto } from './dto/bacteria.dto';

@Injectable()
export class BacteriaService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.bacteria.findMany();
  }

  async search(name: string) {
    return await this.prisma.bacteria.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
    });
  }

  async create(data: BacteriaDto) {
    try {
      return await this.prisma.bacteria.create({
        data,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Já existe uma bactéria com esse nome');
      }

      throw error;
    }
  }

  async findOne(id: number) {
    const bacteria = await this.prisma.bacteria.findUnique({
      where: { id },
    });

    if (!bacteria) {
      throw new NotFoundException('Bactéria não encontrada');
    }

    return bacteria;
  }

  async update(id: number, data: BacteriaDto) {
    try {
      return await this.prisma.bacteria.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException('Já existe uma bactéria com esse nome');
        }

        if (error.code === 'P2025') {
          throw new NotFoundException('Bactéria não encontrada');
        }
      }

      throw error;
    }
  }

  async delete(id: number) {
    try {
      return await this.prisma.bacteria.delete({
        where: { id },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Bactéria não encontrada');
      }

      throw error;
    }
  }
}
