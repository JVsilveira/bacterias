import { Module } from '@nestjs/common';
import { BacteriaModule } from './bacteria/bacteria.module';

@Module({
  imports: [BacteriaModule],
})
export class AppModule {}
