import { BacteriaService } from './bacteria.service';
import { BacteriaDto } from './dto/bacteria.dto';
export declare class BacteriaController {
    private bacteriaService;
    constructor(bacteriaService: BacteriaService);
    findAll(): Promise<{
        id: number;
        name: string;
        description: string;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        name: string;
        description: string;
    } | null>;
    create(data: BacteriaDto): Promise<{
        id: number;
        name: string;
        description: string;
    }>;
    update(id: string, data: BacteriaDto): Promise<{
        id: number;
        name: string;
        description: string;
    }>;
    delete(id: string): Promise<{
        id: number;
        name: string;
        description: string;
    }>;
}
