import { Module } from '@nestjs/common';

import { BacteriaController } from './bacteria.controller';
import { BacteriaService } from './bacteria.service';
import { PrismaService } from './database/prisma.service';

@Module({
  controllers: [BacteriaController],
  providers: [BacteriaService, PrismaService],
})
export class BacteriaModule {}
