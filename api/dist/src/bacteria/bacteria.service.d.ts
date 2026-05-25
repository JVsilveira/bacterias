import { PrismaService } from './database/prisma.service';
import { BacteriaDto } from './dto/bacteria.dto';
export declare class BacteriaService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        name: string;
        description: string;
        gram: string;
    }[]>;
    create(data: BacteriaDto): Promise<{
        id: number;
        name: string;
        description: string;
        gram: string;
    }>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        description: string;
        gram: string;
    } | null>;
    update(id: number, data: BacteriaDto): Promise<{
        id: number;
        name: string;
        description: string;
        gram: string;
    }>;
    delete(id: number): Promise<{
        id: number;
        name: string;
        description: string;
        gram: string;
    }>;
}
